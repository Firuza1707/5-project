import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      {/* nav */}
      <nav className="shadow  bg-black">
        <div className="container py-2">
          <a href="#"><h3>Start Bootstrap</h3></a>
          <ul>
            <li><a href="#" className='a1'>Home</a></li>
            <li><a href="#" className='a1' >About</a></li>
            <li><a href="#" className='a1'>Contact</a></li>
            <li><a href="#" >Blog</a></li>
          </ul>
        </div>
      </nav>
      {/* header */}
      <header>
        <div className='container-fluid bg-light'>
          <h1>Welcome to Blog Home</h1>
          <h4>A Bootstrap 5 starter layout for your next blog homepage</h4>
        </div>
      </header>


      {/* section */}
      <section>
        <div className="container mt-3">
          <div className="row d-flex ">
            <div className="col-lg-8">

              <div className="card mb-2 d-flex ">
                <a href="#">
                  <img src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="" />
                </a>
                <div className="card-body">
                  <div className="small text-muted">January 1,2023</div>
                  <h2 className='card-title'>Featured Post Title</h2>
                  <p className='card-text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, magni quidem eum culpa repellendus veniam aspernatur recusandae nam sapiente soluta porro illo iste accusantium praesentium nobis eius consequuntur dolor rem?
                  </p>
                  <a href="#" className="btn btn-primary">Read more</a>
                </div>
              </div>

              <div className="row  d-flex">
                <div className="col-lg-6">

                  <div className='card mb-4  d-flex'>
                    <a href="#">
                      <img src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" className='img-fluid' />
                    </a>
                    <div className="card-body">
                      <div className="small text-muted">January 1, 2023</div>
                      <h2 className='card-title h4'>Post Title</h2>
                      <p className='card-text'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit corrupti in quam, obcaecati ea expedita veritatis numquam corporis saepe, amet explicabo consequatur doloribus sapiente unde distinctio iste et. Animi, adipisci.
                      </p>
                      <a href="#" className='btn btn-primary'>Read more</a>
                    </div>
                  </div>


                  <div className='card mb-4 d-flex '>
                    <a href="#">
                      <img src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" className='img-fluid' />
                    </a>
                    <div className="card-body">
                      <div className="small text-muted">January 1, 2023</div>
                      <h2 className='card-title h4'>Post Title</h2>
                      <p className='card-text'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit corrupti in quam, obcaecati ea expedita veritatis numquam corporis saepe, amet explicabo consequatur doloribus sapiente unde distinctio iste et. Animi, adipisci.
                      </p>
                      <a href="#" className='btn btn-primary'>Read more</a>
                    </div>
                  </div>
                </div>


                <div className="col-lg-6">

                  <div className='card mb-4  d-flex'>
                    <a href="#">
                      <img src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" className='img-fluid' />
                    </a>
                    <div className="card-body">
                      <div className="small text-muted">January 1, 2023</div>
                      <h2 className='card-title h4'>Post Title</h2>
                      <p className='card-text'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit corrupti in quam, obcaecati ea expedita veritatis numquam corporis saepe, amet explicabo consequatur doloribus sapiente unde distinctio iste et. Animi, adipisci.
                      </p>
                      <a href="#" className='btn btn-primary'>Read more</a>
                    </div>
                  </div>


                  <div className='card mb-4 d-flex '>
                    <a href="#">
                      <img src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" className='img-fluid' />
                    </a>
                    <div className="card-body">
                      <div className="small text-muted">January 1, 2023</div>
                      <h2 className='card-title h4'>Post Title</h2>
                      <p className='card-text'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit corrupti in quam, obcaecati ea expedita veritatis numquam corporis saepe, amet explicabo consequatur doloribus sapiente unde distinctio iste et. Animi, adipisci.
                      </p>
                      <a href="#" className='btn btn-primary'>Read more</a>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      <footer className='py-5 bg-dark'>
        <div className="container">
          <p className='m-0 text-center text-white'>Copyright © Your Website 2023</p>
        </div>
      </footer>






















    </div>
  );
}

export default App;
