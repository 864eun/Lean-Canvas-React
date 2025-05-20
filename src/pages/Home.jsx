import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link to={'canvasdetail/1'}>디테일 페이지1</Link>
        </li>
        <li>
          <Link to={'canvasdetail/2?keyword=canvas2'}>디테일 페이지2</Link>
        </li>
        <li>
          <Link to={'canvasdetail/3?keyword=canvas3#location3'}>
            디테일 페이지3
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
