// ##############################
// // // javascript library for creating charts
// #############################
var Chartist = require("chartist");

// ##############################
// // // variables used to create animation on charts
// #############################
var delays = 160,
  durations = 500;
var delays2 = 80,
  durations2 = 500;

// ##############################
// // // Daily Sales
// #############################

const monthlyCustomerGrowthChart = {
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    series: [[35, 47, 37, 57, 53, 68, 78]]
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: 0,
    high: 100, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  },
  // for animation
  animation: {
    draw: function(data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === "point") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};

// ##############################
// // // Email Subscriptions
// #############################

const emailsSubscriptionChart = {
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mai",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    series: [[142, 43, 220, 380, 253, 153, 126, 134, 268, 210, 256, 295]]
  },
  options: {
    axisX: {
      showGrid: false
    },
    low: 0,
    high: 500,
    chartPadding: {
      top: 0,
      right: 5,
      bottom: 0,
      left: 0
    }
  },
  responsiveOptions: [
    [
      "screen and (max-width: 640px)",
      {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function(value) {
            return value[0];
          }
        }
      }
    ]
  ],
  animation: {
    draw: function(data) {
      if (data.type === "bar") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays2,
            dur: durations2,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};

// ##############################
// // // Email Subscriptions
// #############################

const socialMediaUsageChart = {
  data: {
    labels: [
      "First Quarter",
      "Second Quarter",
      "Third Quarter",
      "Fourth Quarter"
    ],
    series: [[68, 66, 72, 74],
            [58, 53, 59, 63],
            [38, 41, 40, 48],
            [42, 36, 45, 42]]
  },
  options: {
    seriesBarDistance: 15
  },
  responsiveOptions: [
    [
      "screen and (max-width: 640px)",
      {
        axisX: {
          labelInterpolationFnc: function(value) {
            return value[0];
          }
        }
      }
    ]
  ],
  animation: {
    draw: function(data) {
      if (data.type === "bar") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations2,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};


module.exports = {
  monthlyCustomerGrowthChart,
  emailsSubscriptionChart,
  socialMediaUsageChart
};
