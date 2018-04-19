const getReportParams = dateType =>
  dateType === DateType.Monthly
    ? {
        dateType,
        requireMonthIds: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
      }
    : { dateType };
