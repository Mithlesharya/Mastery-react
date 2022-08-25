import Postcard from "./components/posts/Postcard";
import Form from "./components/form/Form";

function App() {
  return (
    <>
      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <Postcard />
            </div>
            <div className="col-lg-4">
              <Form />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
