interface StatusBadgeProps {
  status: "Final Four" | "Tour" | "Watch" | "Rejected";
}

const styles = {
  "Final Four": "bg-green-100 text-green-800",
  Tour: "bg-yellow-100 text-yellow-800",
  Watch: "bg-blue-100 text-blue-800",
  Rejected: "bg-gray-100 text-gray-700",
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}