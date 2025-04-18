import { useDispatch } from "react-redux";
import { vote } from "./../reducers/anecdoteReducer";

export function Anecdote({ anecdote }) {
  const dispatch = useDispatch();

  return (
    <div>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={() => dispatch(vote(anecdote.id))}>vote</button>
      </div>
    </div>
  );
}
