interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const BottomSheet = ({ isOpen, onClose, children }: BottomSheetProps) => {
  if (!isOpen) return null;

  return (
    <>
      {/* 딤처리 */}
      <div
        className="fixed inset-0 bg-black opacity-30 z-40"
        onClick={onClose}
      />
      {/* 바텀시트 본체 */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[375px] bg-white rounded-t-[20px] z-50">
        {children}
      </div>
    </>
  );
};

export default BottomSheet;