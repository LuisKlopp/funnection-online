"use client";

import { useAllApplicationsQuery } from "@/hooks/react-query/useAllApplicationsQuery";
import { useApplicationMutation } from "@/hooks/react-query/useApplicationMutation";

export const AdminApplicationsPageClient = () => {
  const { data, isLoading } = useAllApplicationsQuery();
  const { confirm, cancel } = useApplicationMutation();

  if (isLoading) return <div className="p-6">로딩중...</div>;

  return (
    <div className="mx-auto max-w-md space-y-4 p-4">
      <h1 className="text-lg font-semibold">신청자 관리</h1>

      {data?.map((item: any) => (
        <div
          key={item.id}
          className="rounded-2xl border bg-white p-4 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div className="font-semibold">{item.nickname}</div>

            <div
              className={`rounded-full px-2 py-1 text-xs ${
                item.status === "CONFIRMED"
                  ? "bg-green-100 text-green-600"
                  : item.status === "CANCELLED"
                    ? "bg-red-100 text-red-500"
                    : "bg-gray-100 text-gray-500"
              }`}
            >
              {item.status}
            </div>
          </div>

          <div className="mt-2 text-sm text-gray-500">
            {item.birthYear} / {item.gender === "male" ? "남" : "여"}
          </div>
          <div className="text-sm text-gray-500">📞 {item.phoneNumber}</div>
          <div className="mt-1 text-sm">
            {item.round}회차 · {item.eventDate} {item.startTime}
          </div>
          {item.memo && (
            <div className="mt-2 line-clamp-3 text-sm text-gray-700">
              {item.memo}
            </div>
          )}
          {item.status === "APPLIED" && (
            <div className="mt-4 flex gap-2">
              <button
                onClick={() => confirm(item.id)}
                className="flex-1 rounded-lg bg-blue-500 py-2 text-sm text-white"
              >
                수락
              </button>

              <button
                onClick={() => cancel(item.id)}
                className="flex-1 rounded-lg bg-red-400 py-2 text-sm text-white"
              >
                거절
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
