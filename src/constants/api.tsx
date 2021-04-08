export const protocol_http = "https://";
export const protocol_ws = "wss://";
export const gateway_client_service = "basketball.qiezizhibo.com";
export const auth_service = `${protocol_http}${gateway_client_service}/service-basketball-auth`
export const user_service = `${protocol_http}${gateway_client_service}/service-basketball-user`
export const system_service = `${protocol_http}${gateway_client_service}/service-basketball-system`
export const basketball_service = `${protocol_http}${gateway_client_service}/service-basketball`
export const media_service = `${protocol_http}${gateway_client_service}/service-basketball-media`
export const chat_service = `${protocol_http}${gateway_client_service}/service-basketball-chat`
export const live_service = `${protocol_http}${gateway_client_service}/service-basketball-live`
export const pay_service = `${protocol_http}${gateway_client_service}/service-basketball-pay`
export const websocket_service = `${protocol_ws}${gateway_client_service}/service-basketball-websocket`
// export const websocket_service = `ws://172.20.10.5:8080`
// export const host = "http://192.168.3.102:8080";

//websocket
export const websocket = (id) => `${websocket_service}/websocket/${id}`;

//config
export const API_CONFIG_BANNER = `${system_service}/sys/banner`;
export const API_CONFIG_BULLETIN = `${system_service}/sys/bulletin`;
export const API_CONFIG_BULLETIN_MATCH = `${system_service}/sys/bulletin/match`;
export const API_SYSTEM_SECURITY_CHECK = `${system_service}/wx/ma/securityCheck`;
export const API_VISIT = `${user_service}/user/visit`;
export const API_GET_SHARE_MOMENT_PICTURE = `${system_service}/wx/ma/picture/moment`;
export const API_GET_SHARE_SENTENCE = `${system_service}/sys/share/sentence`;
export const API_GET_SHARE_PICTURE = `${system_service}/wx/ma/picture/share`;
export const API_GET_HEAT_COMPETITION_SHARE = `${system_service}/wx/ma/picture/heat`;

//user
export const API_LOGIN = `${auth_service}/auth`;
export const API_PHONENUMBER = `${auth_service}/user/phone`;
export const API_AUTH_USER = `${auth_service}/auth/user`;
export const API_USER = `${user_service}/user`;
export const API_REFRESH_TOKEN = `${auth_service}/auth/refresh_token`;
export const API_USER_ABILITY = `${user_service}/user/ability`;
export const API_USER_ADDRESS = `${user_service}/user/address`;

//league
export const API_LEAGUE = (id) => `${basketball_service}/league/${id}`;
export const API_LEAGUES = `${basketball_service}/league`;
export const API_LEAGUE_SERIES = `${basketball_service}/league`;
export const API_LEAGUE_PLAYER = `${basketball_service}/league/rank/player`;
export const API_LEAGUE_TEAM = `${basketball_service}/league/rank/team`;
export const API_LEAGUE_SERIES_LEAGUE = `${basketball_service}/league`;
export const API_LEAGUE_REPORT = `${basketball_service}/league/report`;
export const API_LEAGUE_RANK_SETTING = `${basketball_service}/league/rank/setting`;
export const API_LEAGUE_AD = `${basketball_service}/ad/league`;

//match
export const API_MATCH = (id) => `${basketball_service}/match/${id}`;
export const API_MATCHES = `${basketball_service}/match`;
export const API_MATCH_STATUS = `${basketball_service}/timeline/statistics`;
export const API_MATCH_NOOICE = `${basketball_service}/match/nooice`;
export const API_MATCH_COMMENT = `${chat_service}/comment`;
export const API_MATCH_COMMENT_DANMU = `${chat_service}/comment/danmu`;
export const API_MATCH_MEDIA = `${media_service}/media/match`;

//team
export const API_TEAM = (id) => `${basketball_service}/team/${id}`;
export const API_TEAMS = `${basketball_service}/teams`;

//player
export const API_PLAYER = (id) => `${basketball_service}/player/${id}`;
export const API_PLAYERS = `${basketball_service}/player`;
export const API_PLAYER_BEST = `${basketball_service}/player/best`;
export const API_PLAYER_MEDIA = `${media_service}/media/player`;

//live
export const API_ACTIVITY_MEDIA_LIST = (id) => `${media_service}/media/activity?activityId=${id}`;
export const API_ACTIVITY_PING = `${live_service}/activity/ping`;

//media
export const API_MEDIA = (id) => `${media_service}/media/${id}`;
export const API_MEDIA_RECOMMEND = `${media_service}/media/recommend`;
export const API_MEDIA_NOOICE = `${media_service}/media/nooice`;

//search
export const API_SEARCH = `${basketball_service}/search`;

//area
export const API_AREA = `${system_service}/sys/area`;

//pay
export const API_ORDER_CREATE = `${pay_service}/order/jsapi`;
export const API_ORDER_IS_NEED_BUY = `${pay_service}/order/isUserNeedByMatch`;
export const API_ORDER_QUERY = `${pay_service}/order/query`;
export const API_ORDER_USER = `${pay_service}/order/user`;

export const API_GIFT_LIST = `${pay_service}/gift/list`;
export const API_GIFT_SEND_FREE = `${pay_service}/gift/free/send`;
export const API_GIFT_SEND_FREE_LIMIT = `${pay_service}/gift/free/limit`;
export const API_GIFT_RANK_MATCH = (id) => `${pay_service}/gift/rank/match?matchId=${id}`;
export const API_GIFT_RANK_LEAGUE = (id) => `${pay_service}/gift/rank/league?leagueId=${id}`;

export const API_CHARGE_USER = `${basketball_service}/charge/user`;


export const API_DEPOSIT = `${pay_service}/deposit`;
export const API_DEPOSIT_LOGS = `${pay_service}/deposit/logs`;

//heat
export const API_MATCH_HEAT = `${basketball_service}/heat/match`;
export const API_MATCH_TEAM_HEAT = `${basketball_service}/heat/match/team`;
export const API_MATCH_PLAYER_HEAT = `${basketball_service}/heat/match/player`;
export const API_MATCH_PLAYER_HEAT_TOTAL = `${basketball_service}/heat/match/player/total`;
export const API_LEAUGE_HEAT = `${basketball_service}/heat/league`;
export const API_LEAGUE_PLAYER_HEAT = `${basketball_service}/heat/league/player`;
export const API_LEAGUE_PLAYER_HEAT_TOTAL = `${basketball_service}/heat/league/player/total`;
export const API_LEAGUE_TEAM_HEAT = `${basketball_service}/heat/league/team`;
export const API_LEAGUE_TEAM_HEAT_TOTAL = `${basketball_service}/heat/league/team/total`;

//bet
export const API_LEAGUE_BET = `${basketball_service}/bet/league`;
export const API_MATCH_BET = `${basketball_service}/bet/match`;
export const API_MATCH_USER_BET = `${basketball_service}/bet`;
export const API_MATCH_USER_BET_CASH = `${basketball_service}/bet/cash`;
export const API_BET_RANK = `${basketball_service}/bet/rank`;
export const API_BET_FREE = `${basketball_service}/bet/free`;

//subscribe
export const API_SUBSCRIBE = `${system_service}/subscribe`;