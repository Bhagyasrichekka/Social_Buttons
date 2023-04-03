const Button = (props) => {
  const { className, content } = props;
  return <button className={className}>{content}</button>;
};

const element = (
  //  Write your code here.
  <div className="card">
    <h1 className="heading">Social Buttons</h1>

    <div>
      <Button content="Like" className="like btn" />
      <Button content="Share" className="share btn" />
      <Button content="Comment" className="comment btn" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
