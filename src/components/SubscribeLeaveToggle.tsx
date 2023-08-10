import { FC } from "react";
import { Button } from "./ui/Button";

interface SubscribeLeaveToggleProps {}

const SubscribeLeaveToggle: FC<SubscribeLeaveToggleProps> = ({}) => {
  const isSubscribed = false;

  return isSubscribed ? (
    <Button className="w-full mt-1 mb-4">Leave Community</Button>
  ) : (
    <Button className="w-full mt-1 mb-4">Join to Post</Button>
  );
};

export default SubscribeLeaveToggle;
