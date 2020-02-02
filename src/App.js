import React from "react";
import Chance from "chance";
import { Button, Modal } from "antd";
import "./App.css";
import NameArea from "./NameArea";
import Decoration from "./Decoration";
import Winners from "./Winners";
import NamesSource from "./names";
import Pool from "./Pool";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.chance = new Chance(new Date().now);
    this.namesPool = NamesSource;
    this.state = {
      list: [],
      show: true,
      timer: null,
      result: []
    };
  }

  surpriseStatistics = {
    系统软件分中心: 0,
    应用软件分中心: 0,
    现场总线软件部: 0
  };

  surpriseLimit = {
    系统软件分中心: 2,
    应用软件分中心: 2,
    现场总线软件部: 1
  };

  next = () => {
    let list = [];
    if (!this.isSurprise()) {
      while (list.length < 5) {
        const winner = this.gen();
        if (list.every(value => value !== winner)) {
          list.push(winner);
        }
      }
    } else {
      while (list.length < 1) {
        const winner = this.gen();
        if (
          this.surpriseStatistics[winner.dept] < this.surpriseLimit[winner.dept]
        ) {
          list.push(winner);
        }
      }
    }
    this.setState({ show: false }, () => this.setState({ list, show: true }));
  };

  gen = () => {
    const num = this.chance.integer({ min: 0, max: this.namesPool.length - 1 });
    return this.namesPool[num];
  };

  toggle = () => {
    if (this.state.timer) {
      clearInterval(this.state.timer);
      this.state.list.forEach(winner =>
        this.namesPool.splice(this.namesPool.indexOf(winner), 1)
      );
      this.setState({
        timer: null,
        result: [...this.state.result, ...this.state.list]
      });
      if (this.isSurprise()) {
        this.state.list.forEach(
          winner => this.surpriseStatistics[winner.dept]++
        );
      }
    } else {
      this.setState({ timer: setInterval(this.next, 20) });
    }
  };

  showReuslt = () => {
    Modal.info({
      title: "中奖名单",
      content: <Winners data={this.state.result} />,
      maskClosable: true,
      icon: null,
      centered: true,
      okText: "Fine~",
      width: "auto"
    });
  };

  showPool = () => {
    Modal.info({
      title: "奖池名单",
      content: <Pool data={this.namesPool} />,
      maskClosable: true,
      icon: null,
      centered: true,
      okText: "Fine~",
      width: "auto"
    });
  }

  isSurprise = () => this.state.result.length >= 30;

  hasSurprise = () => {
    for (const dept in this.surpriseLimit) {
      if (this.surpriseLimit.hasOwnProperty(dept)) {
        if (this.surpriseLimit[dept] > this.surpriseStatistics[dept]) {
          return true;
        }
      }
    }
    return false;
  };

  render() {
    return (
      <div className="App">
        <Decoration />
        <div className="title">Lucky 2020</div>
        <NameArea list={this.state.list} show={this.state.show} />
        <Button.Group>
          <Button
            disabled={this.isSurprise()}
            type="danger"
            ghost
            onClick={this.toggle}
          >
            {this.state.timer ? "Stop" : "Next"}
          </Button>
          <Button type="danger" ghost onClick={this.showReuslt}>
            Result
          </Button>
          <Button type="danger" ghost onClick={this.showPool}>
            Pool
          </Button>
          {this.isSurprise() && (
            <Button
              disabled={!this.hasSurprise()}
              type="danger"
              ghost
              onClick={this.toggle}
            >
              Surprise~
            </Button>
          )}
        </Button.Group>
      </div>
    );
  }
}

export default App;
