type Props = {
  selected: string;
  onSelect: (value: string) => void;
  onClose: () => void;
};

export default function SortBottomSheet({ selected, onSelect, onClose }: Props) {
  const options = ["최근 게시순", "저장순", "마감 임박순"];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-lg p-4 z-50">
      <div className="text-center text-sm text-gray-500 mb-4">정렬 기준 선택</div>
      <div className="flex flex-col gap-2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onSelect(option)}
            className={`text-left text-sm px-4 py-2 rounded-md ${
              selected === option ? "text-[#3366FF] font-semibold" : "text-[#3F454A]"
            }`}
          >
            {option}
            {selected === option && (
              <img
                src="/assets/icon/icn_check_24.svg"
                alt="check"
                className="inline-block ml-2 w-4 h-4"
              />
            )}
          </button>
        ))}
      </div>

      <button
        onClick={onClose}
        className="mt-4 text-sm text-center text-gray-500 underline w-full"
      >
        닫기
      </button>
    </div>
  );
}