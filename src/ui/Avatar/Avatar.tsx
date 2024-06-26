import Image from "next/image";

type Props = {
  image: string;
};

const Avatar = ({ image }: Props) => {
  return (
    <Image
      src={image}
      width={78}
      height={52}
      alt="avatar"
      className="rounded-full h-[52px] w-[52px] object-contain"
    />
  );
};

export default Avatar;
