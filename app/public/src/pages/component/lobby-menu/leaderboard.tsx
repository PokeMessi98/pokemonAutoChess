import React from "react"
import {
  ILeaderboardBotInfo,
  ILeaderboardInfo
} from "../../../../../models/colyseus-models/leaderboard-info"
import LeaderboardItem from "./leaderboard-item"

export default function Leaderboard(props: {
  isBot: boolean
  infos: ILeaderboardInfo[] | ILeaderboardBotInfo[]
  noElo: boolean | undefined
}) {
  return (
    <div>
      <div style={{ display: "flex", flexFlow: "column", gap: "10px" }}>
        {props.infos.map(
          (i: ILeaderboardInfo | ILeaderboardBotInfo, index: number) => (
            <LeaderboardItem
              key={index}
              item={i}
              isBot={props.isBot}
              noElo={props.noElo}
            />
          )
        )}
      </div>
    </div>
  )
}
