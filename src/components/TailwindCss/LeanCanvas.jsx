import CanvasCard from './CanvasCard';

function LeanCanvas() {
  return (
    <div className="border-4 border-black">
      <div className="grid grid-cols-5">
        <CanvasCard title={'1. 문제'} content={'메모'} />
        <CanvasCard title={'4. 해결안'} content={'메모'} />
        <CanvasCard title={'3. 가치제안'} content={'메모'} />
        <CanvasCard title={'5. 경쟁우위'} content={'메모'} />
        <CanvasCard title={'2. 목표고객'} content={'메모'} />
        <CanvasCard title={'기존 대안'} content={'메모'} isSubtitle={true} />
        <CanvasCard title={'8. 핵심지표'} content={'메모'} />
        <CanvasCard title={'상위 개념'} content={'메모'} isSubtitle={true} />
        <CanvasCard title={'9. 고객경로'} content={'메모'} />
        <CanvasCard title={'얼리 어답터'} content={'메모'} isSubtitle={true} />
      </div>
      <div className="grid grid-cols-2">
        <CanvasCard title={'7. 비용구조'} content={'메모'} />
        <CanvasCard title={'6. 수익 흐름'} content={'메모'} />
      </div>
    </div>
  );
}

export default LeanCanvas;
