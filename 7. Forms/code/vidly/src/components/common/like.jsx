
function Like (props) {
    let classes= "fa fa-heart"; //full heart
    if (!props.liked) classes += "-o"; //empty heart
    return (
      <>
          <i onClick={props.onClick} style={{cursor:"pointer"}} className={classes} aria-hidden="true"></i>
  
      </>
    );
}

export default Like ;
