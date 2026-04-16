import {
  ArrowRight,
  Banknote,
  CalendarDays,
  CheckCircle2,
  CircleAlert,
  Clock3,
  Coins,
  FileText,
  Info,
  LucideProps,
  MessageCircleMore,
  ReceiptText,
  SearchCheck,
  ShieldCheck,
  UserRound,
  UserRoundX,
  Users,
  WalletCards,
  XCircle,
} from "lucide-react";

import { RefundIconName } from "../_data/refundPolicyData";

interface RefundPolicyIconProps extends LucideProps {
  name: RefundIconName;
}

export const RefundPolicyIcon = ({ name, ...props }: RefundPolicyIconProps) => {
  switch (name) {
    case "shield":
      return <ShieldCheck {...props} />;
    case "calendar":
      return <CalendarDays {...props} />;
    case "users":
      return <Users {...props} />;
    case "x-circle":
      return <XCircle {...props} />;
    case "coins":
      return <Coins {...props} />;
    case "message":
      return <MessageCircleMore {...props} />;
    case "user":
      return <UserRound {...props} />;
    case "wallet":
      return <WalletCards {...props} />;
    case "bank":
      return <Banknote {...props} />;
    case "clock":
      return <Clock3 {...props} />;
    case "alert":
      return <UserRoundX {...props} />;
    case "file":
      return <FileText {...props} />;
    case "search":
      return <SearchCheck {...props} />;
    case "card":
      return <ReceiptText {...props} />;
    case "info":
      return <Info {...props} />;
    case "arrow":
      return <ArrowRight {...props} />;
    case "check":
      return <CheckCircle2 {...props} />;
    default:
      return <CircleAlert {...props} />;
  }
};
