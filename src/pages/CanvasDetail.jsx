import { useParams, useSearchParams, useLocation } from 'react-router-dom';

function CanvasDetail() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const location = useLocation();

  return (
    <>
      <div>
        <h2>param 추출</h2>
        <p>param : {id}</p>
        <p>keword : {searchParams.get('keyword')}</p>
        <p>hash : {location.hash}</p>
      </div>
    </>
  );
}

export default CanvasDetail;
