import Image from "next/image";

// QvikChat RAG demo image
export const QvikChatRagDemoImg = ({
  className,
  width,
  height,
  showSubtitle,
}: {
  className?: string;
  width?: number;
  height?: number;
  showSubtitle?: boolean;
} = {}) => {
  return (
    <>
      <Image
        src="/images/qvikchat-rag-demo.png"
        width={`${width ? width : 1000}`}
        height={`${height ? height : 500}`}
        alt="QvikChat RAG demo"
        className={className}
      />
      {showSubtitle && (
        <p className="text-center text-sm text-gray-500 mt-2">
          QvikChat RAG endpoint demo
        </p>
      )}
    </>
  );
};

export default QvikChatRagDemoImg;
