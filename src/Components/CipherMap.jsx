import { Box, Heading, Button } from "@chakra-ui/react";
import CalendarHeatmap from "react-calendar-heatmap";
import { Tooltip } from "react-tooltip";

export default function CipherMap() {
  const date = new Date();
  const startDate = new Date(date.getFullYear() - 1, date.getMonth(), 1);

  const values = [
    { date: "2023-01-01", count: 14 },
    { date: "2023-01-22", count: 122 },
    { date: "2023-01-30", count: 38 },
    { date: "2023-03-30", count: 1 },
    { date: "2023-02-30", count: 2 },
    // ...and so on
  ];

  const getTooltipDataAttrs = (value) => {
    // Temporary hack around null value.date issue
    if (!value || !value.date) {
      return {
        "data-tooltip-content": "No activity",
        "data-tooltip-id": "tooltip",
      }
    }
    value.date = new Date(value.date);
    // Configuration for react-tooltip
    return {
      "data-tooltip-content": `${value?.date
        .toISOString()
        .slice(0, 10)} has count: ${value.count}`,
      "data-tooltip-id": "tooltip",
    };
  };
  

  return (
    <Box>
      <Box>
        <Heading
          as="h3"
          size="md"
          textAlign="left"
          textTransform="uppercase"
          mb="6"
        >
          Cipher Map
        </Heading>
      </Box>
      <Box fontSize="xs" textColor="gray.700">
        <CalendarHeatmap
          className="react-calendar-heatmap"
          startDate={startDate.toISOString().slice(0, 10)}
          endDate={date.toISOString().slice(0, 10)}
          gutterSize={3.5}
          weekdayLabels={["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]}
          showWeekdayLabels={true}
          showMonthLabels={true}
          values={values}
          classForValue={(value) => {
            if (!value) {
              return "color-empty";
            }
            return `color-scale-${Math.min(value.count, 4)}`;
          }}
          tooltipDataAttrs={getTooltipDataAttrs}
        
        />
        <Box
          className="mp-heat-map-foot"
          display="flex"
          alignItems="center"
          gap="2"
          justifyContent="flex-end"
        >
          <span>Less</span>
          <svg width="14" height="14">
            <rect width="14" height="14" fill="#fcfcfc"></rect>
          </svg>
          <svg width="14" height="14">
            <rect width="14" height="14" fill="#f3dcc4"></rect>
          </svg>
          <svg width="14" height="14">
            <rect width="14" height="14" fill="#e5b583"></rect>
          </svg>
          <svg width="14" height="14">
            <rect width="14" height="14" fill="#d48432"></rect>
          </svg>
          <svg width="14" height="14">
            <rect width="14" height="14" fill="#c87a2a"></rect>
          </svg>
          <span>More</span>
        </Box>
      </Box>
      <Tooltip id="tooltip" />
    </Box>
  );
}
