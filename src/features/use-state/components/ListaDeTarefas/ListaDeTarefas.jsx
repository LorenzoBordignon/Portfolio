import { useState } from "react"; //UseState
import "./ListaDeTarefas.css";

export function ListaDeTarefas() {
  const [tarefas, setTarefas] = useState([
    { id: 1, descricao: "teste", concluido: false },
    { id: 2, descricao: "teste 2", concluido: false },
  ]);
  const [novaTarefa, setNovaTarefa] = useState({
    id: "",
    descricao: "",
    concluido: false,
  });

  function adicionarTarefa() {
    if (!novaTarefa.descricao.trim()) return;
    setTarefas(tarefas.concat(novaTarefa));
    setNovaTarefa({
      id: "",
      descricao: "",
      concluido: false,
    });
  }

  function removerTarefa(id) {
    setTarefas(tarefas.filter((tarefa) => tarefa.id != id));
  }

  return (
    <div className="lista-tarefas">
      <h3>Lista de Tarefas</h3>
      <div className="lista-tarefas__content">
        <div className="lista-tarefas__insert">
          <label htmlFor="new-task">Adicionar tarefa</label>
          <input
            type="text"
            name="new-task"
            value={novaTarefa.descricao}
            onChange={(e) =>
              setNovaTarefa({
                id: tarefas.length + 1,
                descricao: e.target.value,
                concluido: false,
              })
            }
            placeholder="Adicione uma nova tarefa"
          />
          <button className="btn btn-primary" onClick={adicionarTarefa}>
            Adicionar Tarefa
          </button>
        </div>
        <ul className="lista-tarefas__list">
          {tarefas.map((tarefa) => (
            <li key={tarefa.id} className="lista-tarefas__list-item">
              <input
                type="checkbox"
                id={tarefa.id}
                checked={tarefa.concluido}
                onChange={() =>
                  setTarefas(
                    tarefas.map((t) =>
                      t.id === tarefa.id
                        ? { ...t, concluido: !t.concluido }
                        : t,
                    ),
                  )
                }
              />
              <span className={tarefa.concluido ? "tarefa-concluida" : ""}>
                {tarefa.descricao}
              </span>
              <button
                className="btn btn-primary btn-remover"
                onClick={() => removerTarefa(tarefa.id)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
