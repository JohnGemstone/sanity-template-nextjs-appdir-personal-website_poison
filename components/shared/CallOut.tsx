import Link from "next/link";

const data = [
  {
    title: "character",
    description: (
      <>
        A character is a minimal unit of text that has semantic value
      </>
    ),
    icon: null,
  },
  {
    title: "character set",
    description: (
      <>
        A character set is a collection of characters that might be used by multiple languages. Example: The Latin character set is used by English and most European languages, though the Greek character set is used only by the Greek language.
      </>
    ),
    icon: null,
  },
  {
    title: "coded character set",
    description: (
      <>
        A coded character set is a character set in which each character corresponds to a unique number.
      </>
    ),
    icon: null,
  },
  {
    title: "code unit",
    description: (
      <>
        A code unit is the "word size" of the character encoding scheme, such as 7-bit, 8-bit, 16-bit. In some schemes, some characters are encoded using multiple code units, resulting in a variable-length encoding.
        <span className="underline font-medium text-white"><Link href="/test">Test Libk</Link></span>  A code unit is referred to as a code value in some documents
      </>
    ),
    icon: null,
  },
];

const CallOut = ({}) => {
  return (
    <>
      <div className="gradient-fill h-3 w-full"></div>
      <div className="relative w-full bg-gray-800 px-4 lg:px-6">
        <div className="relative mx-auto overflow-hidden py-24 lg:max-w-main">
          <div className="pb-10">
            <h2 className="pb-4 font-medium uppercase tracking-wider text-base">
              <span className="text-gray-200">Character encoding</span>
            </h2>
            <h3 className="max-w-2xl font-medium text-white text-2xl">
            Character encoding is the process of assigning numbers to graphical characters, especially the written characters of human language, allowing them to be stored, transmitted, and transformed using digital computers.[1] The numerical values that make up a character encoding are known as "code points" and collectively comprise a "code space", a "code page", or a "character map".
            </h3>
          </div>
          <div className="grid w-full gap-x-6 gap-y-8 xs:grid-cols-2 lg:grid-cols-4 ">
            {data.map((item, index) => {
              return (
                <Card
                  key={index}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                />
              );
            })}
          </div>
        </div>
      </div>
      {/* <div className="gradient-fill h-3 w-full"></div> */}
    </>
  );
};

type CardProps = {
  title: string;
  description: JSX.Element;
  icon: any;
};

const Card = ({ title, description, icon }:CardProps) => {
  return (
    <div className="flex flex-col text-white ">
      <div className="pb-4 font-semibold text-lg">{title}</div>
      <div className="text-gray-300 text-base">{description}</div>
    </div>
  );
};

export default CallOut;
