import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "~/styled";
import Section from "../System/Section";
import { Column, Columns } from "./Detail";

export default function StorySchedule() {
  return (
    <Section background="radial-gradient(circle at bottom, #3A4B5C, #2A2E32)">
      <Title>행사 시간표</Title>
      <Columns>
        <Column>
          <Date>8월 31일 (토)</Date>
          <ScheduleItem
            time="13:00"
            background="rgba(0, 0, 0, .1)"
            titleColor="rgba(255, 255, 255, .75)"
            icon={["fal", "id-card-alt"]}
            iconColor="#339AF0"
            title="등록"
          />
          <ScheduleItem
            time="13:30"
            background="rgba(48, 56, 64, .9)"
            title="개회사"
            caption="김예본 리더"
            icon={["fal", "plane-departure"]}
            iconColor="#339AF0"
          />
          <ScheduleItem
            time="13:50"
            background="rgba(48, 56, 64, .9)"
            title="후원사 세션"
            caption="AWS Educate"
            icon={["fal", "aws"]}
            iconColor="#fbab00"
          />
          <ScheduleItem
            time="14:00"
            background="rgba(48, 56, 64, .9)"
            title="후원사 세션"
            caption="당근마켓"
            icon={["fal", "carrot"]}
            iconColor="#fbab00"
          />
          <ScheduleItem
            time="14:10"
            background="rgba(48, 56, 64, .9)"
            title="아이스 브레이킹"
            icon={["fal", "comments-alt"]}
            iconColor="#FAB005"
          />
          <ScheduleItem
            background="rgba(0, 0, 0, .1)"
            titleColor="rgba(255, 255, 255, .75)"
            time="14:30"
            title="팀별 프로젝트 진행"
            icon={["fal", "code"]}
            iconColor="#FF6B6B"
          />
          <ScheduleItem
            time="18:00"
            background="rgba(48, 56, 64, .9)"
            title="저녁 식사"
            icon={["fas", "utensils"]}
            iconColor="#fd7e14"
          />
          <ScheduleItem
            background="rgba(0, 0, 0, .1)"
            titleColor="rgba(255, 255, 255, .75)"
            time="19:00"
            title="팀별 프로젝트 진행"
            icon={["fal", "code"]}
            iconColor="#FF6B6B"
          />
          <ScheduleItem
            time="22:00"
            background="rgba(48, 56, 64, .9)"
            title="야식"
            icon={["fas", "utensils"]}
            iconColor="#fd7e14"
          />
        </Column>
        <Column>
          <Date>9월 1일 (일)</Date>
          <ScheduleItem
            background="rgba(0, 0, 0, .1)"
            titleColor="rgba(255, 255, 255, .75)"
            time="00:00"
            title="팀별 프로젝트 진행"
            icon={["fal", "code"]}
            iconColor="#FF6B6B"
          />
          <ScheduleItem
            time="08:30"
            background="rgba(48, 56, 64, .9)"
            title="아침 식사"
            icon={["fas", "utensils"]}
            iconColor="#fd7e14"
          />
          <ScheduleItem
            time="09:00"
            background="rgba(48, 56, 64, .9)"
            title="정리시간"
            icon={["fas", "broom"]}
            iconColor="#7950f2"
          />
          <ScheduleItem
            background="rgba(0, 0, 0, .1)"
            titleColor="rgba(255, 255, 255, .75)"
            time="09:30"
            title="팀별 프레젠테이션"
            icon={["fal", "keynote"]}
            iconColor="#20C997"
          />
          <ScheduleItem
            background="rgba(0, 0, 0, .1)"
            titleColor="rgba(255, 255, 255, .75)"
            time="10:30"
            title="수상 및 폐회식"
            icon={["fal", "award"]}
            iconColor="#339AF0"
          />
          <ScheduleItem
            time="11:00"
            background="rgba(48, 56, 64, .9)"
            title="폐회식"
            caption="김예본 리더"
            icon={["fal", "plane-arrival"]}
            iconColor="#339AF0"
          />
        </Column>
      </Columns>
    </Section>
  );
}

const Title = styled.h1`
  margin: 0;
  color: #fff;
  font-weight: 800;
  margin-bottom: 2rem;
`;

const Date = styled.h3`
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
`;

interface IScheduleItemProps {
  background: string;
  title: string;
  titleColor?: string;
  time: string;
  caption?: string;
  icon?: IconProp;
  iconColor?: string;
  avatarUrl?: string;
}
function ScheduleItem(props: IScheduleItemProps) {
  return (
    <ScheduleItemContainer background={props.background}>
      <ScheduleItemTime>{props.time}</ScheduleItemTime>
      <ScheduleItemIcon iconColor={props.iconColor}>
        {props.icon && <FontAwesomeIcon icon={props.icon} fixedWidth />}
        {!props.icon && <ScheduleItemAvatar avatarUrl={props.avatarUrl} />}
      </ScheduleItemIcon>
      <ScheduleItemTitle color={props.titleColor}>
        {props.title}
      </ScheduleItemTitle>
      {props.caption && (
        <ScheduleItemCaption>{props.caption}</ScheduleItemCaption>
      )}
    </ScheduleItemContainer>
  );
}

interface IScheduleItemContainerProps {
  background: string;
}
const ScheduleItemContainer = styled.div<IScheduleItemContainerProps>`
  background: ${props => props.background || "rgba(0, 0, 0, .05)"};
  height: 3.125rem;
  display: flex;
`;

const ScheduleItemTime = styled.div`
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.5);
  padding: 0 0 0 0.75rem;
  font-size: 0.75rem;
  font-style: italic;
  width: 2.75rem;
`;

interface IScheduleItemIconProps {
  iconColor?: string;
}
const ScheduleItemIcon = styled.div<IScheduleItemIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;

  ${props =>
    props.iconColor &&
    css`
      color: ${props.iconColor};
    `}
`;

interface IScheduleItemAvatarProps {
  avatarUrl?: string;
}
const ScheduleItemAvatar = styled.div<IScheduleItemAvatarProps>`
  width: 2rem;
  min-height: 2rem;
  border-radius: 1rem;
  background: ${props => props.theme.gray[9]};
`;

interface IScheduleItemTitleProps {
  color?: string;
}
const ScheduleItemTitle = styled.div<IScheduleItemTitleProps>`
  display: flex;
  align-items: center;
  flex: 1;
  font-size: 0.875rem;
  color: ${props => props.color || "#fff"};
  word-break: keep-all;
  line-height: 1.45;
`;

const ScheduleItemCaption = styled.div`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  width: 8.5rem;
`;
