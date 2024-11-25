import React from 'react'
import { useToast } from './hooks/useToast';

const App = () => {
  const { addToast } = useToast();
  return (
    <div>
      <button onClick={()=>{
        addToast('info','Info Toast', 'top-right', 3000);
      }}>Info Top right Toast </button>

      <button onClick={()=>{
        addToast('success','Success Toast', 'top-left', 2000);
      }}>Success Top Left Toast </button>

      <button onClick={()=>{
        addToast('error','Error Toast ', 'bottom-left', 1000);
      }}>Error Bottom Left Toast </button>

      <button onClick={()=>{
        addToast('warning','Warning Toast', 'bottom-right', 4000);
      }}>Warning Bottom Right Toast </button>
    </div>
  )
}

export default App;