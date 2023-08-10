import classnames from "https://cdn.skypack.dev/classnames";

function NotifyOnce({ children }) {
  setTimeout(function () {
    console.log("실행됨");
  }, 1000);

  return (
    <div
      className={classnames(
        "fixed transition-all right-[10px]",
        { "top-[-60px]": true },
        { "top-[10px]": false }
      )}
    >
      {children}
    </div>
  );
}

function Alert({ color: color_, children }) {
  const color = color_ ?? "red";

  return (
    <div className="alert alert-info shadow-lg">
      <div className={`text-[${color}]`}>
        <span>
          <i className="fa-solid fa-circle-info"></i>
        </span>
        <span> {children}</span>
      </div>
    </div>
  );
}

function Notice() {
  return (
    <>
      <NotifyOnce>
        <Alert>"안녕" 반가워</Alert>
      </NotifyOnce>
      <br />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        harum nobis nisi qui esse, perferendis cumque ipsum animi corrupti
        mollitia doloribus dicta sequi quo nihil delectus. Nihil cum eius
        accusamus?
      </div>
    </>
  );
}

export default Notice;
