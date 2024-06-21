export const Task=(props)=>{
    return (
    
      <div className='task'>
      <h1 style={{backgroundColor:props.completed?"green":"white"}}>{props.taskName}</h1>
      <button onClick={()=>props.complete(props.id)}>complete</button>
      <button onClick={()=>props.deleteButton(props.id)}>X</button>
        </div>
      );
};