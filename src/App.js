import React from 'react'
import { useToast } from './hooks/useToast';

const App = () => {
  const { addToast } = useToast();
  return (
    <div>
      <button onClick={()=>{
        addToast('info','Info Toast', 3000);
      }}>Info Toast </button>

      <button onClick={()=>{
        addToast('success','Success Toast', 2000);
      }}>Success Toast </button>

      <button onClick={()=>{
        addToast('error','Error Toast ', 1000);
      }}>Error Toast </button>

      <button onClick={()=>{
        addToast('warning','Warning Toast', 4000);
      }}>Warning Toast </button>
    </div>
  )
}

export default App;