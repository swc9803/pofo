<template>
  <div id="clock">
     {{ date }}
    <br />
     {{ time }}
  </div>
  <div id="weather">
    <div>
      <div :title="weather.weather[0].main">
        <!-- Clear -->
        <v-icon v-if="code == 800">{{ icons[5] }}</v-icon>
        <!-- Thunderstorm -->
        <v-icon v-else-if="code.substr(0, 1) == 2">
          {{ icons[0] }}
        </v-icon>
        <!-- Drizzle -->
        <v-icon v-else-if="code.substr(0, 1) == 3">
          {{ icons[1] }}
        </v-icon>
        <!-- Rain -->
        <v-icon v-else-if="code.substr(0, 1) == 5">
          {{ icons[2] }}
        </v-icon>
        <!-- Snow -->
        <v-icon v-else-if="code.substr(0, 1) == 6">
          {{ icons[3] }}
        </v-icon>
        <!-- Atmosphere -->
        <v-icon v-else-if="code.substr(0, 1) == 7">
          {{ icons[4] }}
        </v-icon>
        <!-- Clouds -->
        <v-icon v-else>
          {{ icons[6] }}
        </v-icon>
      </div>
      <div>{{ Math.round(temp) }}℃</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      week: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
      time: '',
      date: ''
    }
  },
  mounted () {
    setInterval(this.updateTime, 1000) // 1초마다 시간 갱신
  },
  methods: {
    updateTime () {
      var cd = new Date()
      // 날짜 출력
      this.date =
        this.zeroPadding(cd.getFullYear(), 4) +
        '/' +
        this.zeroPadding(cd.getMonth() + 1, 2) +
        '/' +
        this.zeroPadding(cd.getDate(), 2) +
        ' ' +
        this.week[cd.getDay()]
      // 시간 출력
      this.time =
        this.zeroPadding(cd.getHours(), 2) +
        ':' +
        this.zeroPadding(cd.getMinutes(), 2) +
        ':' +
        this.zeroPadding(cd.getSeconds(), 2)
    },
    zeroPadding (num, digit) {
      var zero = ''
      for (var i = 0; i < digit; i++) {
        zero += '0'
      }
      return (zero + num).slice(-digit)
    }
  }
}

</script>

<style scoped>

</style>
