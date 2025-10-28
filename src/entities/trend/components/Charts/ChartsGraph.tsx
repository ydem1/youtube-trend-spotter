import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { COLORS } from "src/app/config/colors";
import { MergedDataPoint } from "../../model/types";

interface Props {
  data: MergedDataPoint[];
  termA: string;
  termB: string;
}

export const ChartsGraph = ({ data, termA, termB }: Props) => {
  const { primary, secondary, default: text, widget } = COLORS;

  return (
    <ResponsiveContainer width="100%" height={380}>
      <LineChart
        data={data}
        margin={{ top: 10, right: 30, left: 10, bottom: 5 }}
      >
        <defs>
          <linearGradient id="primaryGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={primary} stopOpacity={0.9} />
            <stop offset="95%" stopColor={primary} stopOpacity={0.1} />
          </linearGradient>
          <linearGradient id="secondaryGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={secondary} stopOpacity={0.9} />
            <stop offset="95%" stopColor={secondary} stopOpacity={0.1} />
          </linearGradient>
        </defs>

        <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.25} />
        <XAxis
          dataKey="date"
          tick={{ fill: text, fontSize: 12 }}
          tickLine={false}
        />
        <YAxis
          tick={{ fill: text, fontSize: 12 }}
          tickFormatter={(v) =>
            v >= 1_000_000
              ? `${(v / 1_000_000).toFixed(1)}M`
              : `${(v / 1_000).toFixed(0)}k`
          }
          tickLine={false}
        />
        <Tooltip
          contentStyle={{
            background: widget,
            border: `1px solid ${primary}`,
            borderRadius: "12px",
            color: text,
            fontSize: "13px",
          }}
          formatter={(value: number) =>
            `${value.toLocaleString("en-US")} views`
          }
        />
        <Legend verticalAlign="top" align="center" iconType="circle" />
        <Line
          type="monotone"
          dataKey={termA}
          stroke="url(#primaryGradient)"
          strokeWidth={2.5}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey={termB}
          stroke="url(#secondaryGradient)"
          strokeWidth={2.5}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
