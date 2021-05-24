import {Component} from 'react'
import {View, Text} from '@tarojs/components'
import './index.scss'
import StatBar from '../stat-bar';

type PageStateProps = {}

type PageDispatchProps = {}

type PageOwnProps = {
  statistics: [];
  matchInfo: any;
}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Statistics {
  props: IProps;
}

class Statistics extends Component<IProps, PageState> {
  static defaultProps = {}
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  getStatisticsPrecent = (hostvalue, guestvalue): any => {
    const total = hostvalue + guestvalue;
    let precent = 0;
    if(hostvalue == guestvalue || total == 0){
      return 50;
    }
    precent = hostvalue / (hostvalue + guestvalue) * 100;
    return precent;
  }
  getStatisticsList = (statistics, againstTeams) => {
    if (againstTeams == null) {
      return
    }
    let againstStatisticsList: Array<any> = [];
    for (let key of Object.keys(againstTeams)) {
      const againstTeam = againstTeams[key];
      const aganistStatistics = statistics[key];
      let hostTeamName = "主队";
      let guestTeamName = "客队";
      if (againstTeam.hostTeam != null) {
        hostTeamName = againstTeam.hostTeam.name;
      }
      if (againstTeam.guestTeam != null) {
        guestTeamName = againstTeam.guestTeam.name;
      }
      if(aganistStatistics){
        const {
          goalOneHost = 0, goalOneGuest = 0,
          goalTwoHost = 0, goalTwoGuest = 0,
          goalThreeHost = 0, goalThreeGuest = 0
        } = aganistStatistics;
        aganistStatistics.goalOnePercent = this.getStatisticsPrecent(goalOneHost, goalOneGuest);
        aganistStatistics.goalTwoPercent = this.getStatisticsPrecent(goalTwoHost, goalTwoGuest);
        aganistStatistics.goalThreePercent = this.getStatisticsPrecent(goalThreeHost, goalThreeGuest);
      }
      againstStatisticsList.push({hostTeamName: hostTeamName, guestTeamName: guestTeamName, ...aganistStatistics});
    }
    return againstStatisticsList;
  }

  render() {
    const {statistics = [], matchInfo = {}} = this.props
    const list = this.getStatisticsList(statistics, matchInfo.againstTeams);
    return (
      <View>
        {list && list.map((item: any, index) => {
          const {
            hostTeamName = 0, guestTeamName = 0,
            goalOneHost = 0, goalOneGuest = 0,
            goalTwoHost = 0, goalTwoGuest = 0,
            goalThreeHost = 0, goalThreeGuest = 0,
            goalOnePercent = 0, goalTwoPercent = 0,
            goalThreePercent = 0
          } = item;
          return (
            <View key={index}>
              <View className="qz-statistics-title">{`${hostTeamName} VS ${guestTeamName}`}</View>
              <View className="qz-statistics-item">
                <View className="qz-statistics-item-text">
                  <Text className="qz-statistics-item-text-title">一分球</Text>
                  <Text className="qz-statistics-item-text-host">{goalOneHost}</Text>
                  <Text className="qz-statistics-item-text-guest">{goalOneGuest}</Text>
                </View>
                <View className="qz-statistics-item-stat">
                  <StatBar percent={goalOnePercent}/>
                </View>
              </View>
              <View className="qz-statistics-item">
                <View className="qz-statistics-item-text">
                  <Text className="qz-statistics-item-text-title">二分球</Text>
                  <Text className="qz-statistics-item-text-host">{goalTwoHost}</Text>
                  <Text className="qz-statistics-item-text-guest">{goalTwoGuest}</Text>
                </View>
                <View className="qz-statistics-item-stat">
                  <StatBar percent={goalTwoPercent}/>
                </View>
              </View>
              <View className="qz-statistics-item">
                <View className="qz-statistics-item-text">
                  <Text className="qz-statistics-item-text-title">三分球</Text>
                  <Text className="qz-statistics-item-text-host">{goalThreeHost}</Text>
                  <Text className="qz-statistics-item-text-guest">{goalThreeGuest}</Text>
                </View>
                <View className="qz-statistics-item-stat">
                  <StatBar percent={goalThreePercent}/>
                </View>
              </View>
            </View>
          )
        })}
      </View>
    )
  }
}

export default Statistics
