import React, { Component } from 'react'
import logo from '../logo.svg';

import { LIST_VIEW, CHART_VIEW,TYPE_INCOME,TYPE_OUTCOME,parseToYearAndMonth,padLeft} from '../utility'
import PriceList from '../components/PriceList'
import ViewTab from '../components/ViewTab'
import MonthPicker from '../components/MonthPicker'
import TotalPrice from '../components/TotalPrice'
import CreateBtn from '../components/CreateBtn'

const categories = {
    "1" : {
        "id": "1",
        "name": "traver",
        "type": "outcome",
        "iconName": "ios-plane"
    },
    "2" : {
        "id": "2",
        "name": "finance",
        "type": "income",
        "iconName": "logo-yen"
    }
}

const items = [
    {
      "id" : 1,
      "title": "go to NYC",
      "price": 200,
      "date": "2019-03-10",
      "cid":1
    },
    {
      "id" : 2,
      "title": "go to EWR",
      "price": 300,
      "date": "2019-03-10",
      "cid":1
    },
    {
        "id" : 3,
        "title": "go to LGA",
        "price": 400,
        "date": "2018-04-10",
        "cid":1
      }
  ]

  const newItem = {
      "id" : 4,
      "title": "new Item",
      "price":300,
      "date":"2018-10-10",
      "cid":1
  }
  class Home extends Component {
      constructor(props) {
          super(props)
          this.state = {
              items,
              currentDate: parseToYearAndMonth(),
              tabView: LIST_VIEW
          }
      }
      changeView = (view) => {
        this.setState({
            tabView:view
        })
      }
      changeDate = () => {

      }
      modifyItem = (modifiedItem) => {
            const modifieditems = this.state.items.map(item=>{
                if (item.id === modifiedItem.id) {
                    return { ...item, title: 'updated title' }
                } else {
                    return item
                }
            })
            console.log(modifieditems)
            this.setState({
                items: modifieditems
            })
      }
      createItem = () => {
            this.setState({
                items:[newItem,...this.state.items]
            })
      }
      deleteItem = (deltedItem) => {
            const filteredItems = this.state.items.filter(item => item.id !== deltedItem.id)
            this.setState({
                items: filteredItems
            })
      }
      render() {
          const { items, currentDate, tabView } = this.state
          const itemWithCategory = items.map(item => {
              item.category = categories[item.cid]
              return item
          }).filter(item => {
            return item.date.includes(`${currentDate.year}-${padLeft(currentDate.month)}`)
        })
          let totalIncome = 0, totalOutcome = 0
          itemWithCategory.forEach(item => {
              if (item.category.type === TYPE_INCOME) {
                 totalOutcome += item.price
              } else {
                  totalIncome += item.price
              }
          })
          return (
              <React.Fragment>
                  <header className="App-header">
                    <div className="row mb-5"> 
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <div className="row">
                        <div className="col">
                            <MonthPicker
                                year={currentDate.year}
                                month={currentDate.month}
                                onChange={this.changeDate}
                             />
                        </div>
                        <div className="col">
                            <TotalPrice 
                                income={totalIncome}
                                outcome={totalOutcome}
                            />
                        </div>
                    </div>
                  </header>
                  <div className="content-area py-3 px-3">
                        <ViewTab activeTab={tabView} onTabChange={this.changeView} />
                        <CreateBtn onClick={this.createItem} />
                        { tabView === LIST_VIEW &&
                            <PriceList
                                items={ itemWithCategory }
                                onModifyItem={this.modifyItem}
                                onDeleteItem={this.deleteItem}
                            />
                        }
                        { tabView === CHART_VIEW &&
                           <h1>This is chart view</h1>
                        }
                  </div>
              </React.Fragment>
          )
      }
  }

  export default Home