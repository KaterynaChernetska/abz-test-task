import { ThreeDots } from 'react-loader-spinner';

export const MiniLoader = () => {
  return (
    <ThreeDots
      height="20"
      width="50"
      radius="9"
      color="#4fa94d"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
};