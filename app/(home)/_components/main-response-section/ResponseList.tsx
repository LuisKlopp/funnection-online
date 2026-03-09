import { RESPONSES } from "@/constants/responses.constants";

import { ResponseCard } from "./ResponseCard";

export const ResponseList = () => {
  return (
    <div className="space-y-6">
      {RESPONSES.map((item) => (
        <ResponseCard
          key={item.id}
          icon={item.icon}
          iconBg={item.iconBg}
          content={item.content}
          likes={item.likes}
          profile={item.profile}
        />
      ))}
    </div>
  );
};
