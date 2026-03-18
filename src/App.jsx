import "devextreme/dist/css/dx.light.css";
import { useCallback, useEffect, useRef, useState } from "react";
import "./reset.css";
import "./App.css";
import { Header } from "./components/UI/Header/Header";
import { Navigation } from "./components/UI/Navigation/Navigation";
import { Page } from "./components/UI/Page/Page";
import { Login } from "./components/UI/Login/Login";
import { supabase } from "./lib/supabaseClient";
import { Loading } from "./components/UI/Loading/Loading";

function App() {
  const MIN_LOADING_MS = 500;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [session, setSession] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const loadingStartedAtRef = useRef(0);
  const loadingTimeoutRef = useRef(null);

  const beginLoading = useCallback(() => {
    if (loadingTimeoutRef.current) {
      clearTimeout(loadingTimeoutRef.current);
      loadingTimeoutRef.current = null;
    }

    loadingStartedAtRef.current = Date.now();
    setIsLoading(true);
  }, []);

  const endLoadingWithCallback = useCallback((callback) => {
    const elapsed = Date.now() - loadingStartedAtRef.current;
    const remaining = Math.max(0, MIN_LOADING_MS - elapsed);

    if (loadingTimeoutRef.current) {
      clearTimeout(loadingTimeoutRef.current);
    }

    loadingTimeoutRef.current = setTimeout(() => {
      callback?.();
      setIsLoading(false);
      loadingTimeoutRef.current = null;
    }, remaining);
  }, []);

  const endLoading = useCallback(() => {
    endLoadingWithCallback();
  }, [endLoadingWithCallback]);

  useEffect(() => {
    async function carregarSessao() {
      beginLoading();
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.error(error.message);
        endLoading();
        return;
      }

      endLoadingWithCallback(() => {
        setSession(data.session);
      });
    }

    carregarSessao();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      endLoadingWithCallback(() => {
        setSession(session);
      });
    });

    return () => {
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
      }
      subscription.unsubscribe();
    };
  }, [beginLoading, endLoading, endLoadingWithCallback]);

  async function logoutSession() {
    beginLoading();
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error(error.message);
      endLoading();
      return;
    }
  }
  return (
    <>
      {session ? (
        <section
          className={`app-shell ${
            isMenuOpen ? "app-shell-menu-open" : "app-shell-menu-closed"
          }`}
        >
          <Header
            isMenuOpen={isMenuOpen}
            onToggleMenu={() => setIsMenuOpen((currentState) => !currentState)}
            nomePortfolio="Portfólio Lorenzo"
            onLogoutSession={() => logoutSession()}
          />
          <Navigation
            isOpen={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
          />
          <div className="main-page">
            <Page />
          </div>
        </section>
      ) : (
        <Login onAuthLoadingChange={(nextState) => {
          if (nextState) {
            beginLoading();
            return;
          }

          endLoading();
        }} />
      )}
      {isLoading && <Loading />}
    </>
  );
}

export default App;
