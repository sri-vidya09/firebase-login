import {Component} from 'react'
import HeadingPage from '../HeadingPage'

class AllTabsSection extends Component{
    state={
        allTabs:[],
    }
    componentDidMount(){
        this.getAllTabs()
    }

    getAllTabs=async()=>{
        const url = "https://run.mocky.io/v3/77a7e71b-804a-4fbd-822c-3e365d3482cc"
        const options={
            method:"GET",
            header:{
                Authorization:"Bearer 78d08656335aa3f05a94910cda8d2e8769ab031a00d2ac618583148420f66b9d"
            },
        }
        const response = await fetch(url,options)
        if (response.ok===true){
            const data = await response.json()
            console.log(data)
            const fetchedData=data.table_menu_list.map(tabs=>({
                menuCategory:tabs.menu_category,
                menuCategoryId:tabs.menu_category_id,
            }))
            this.setState({allTabs:fetchedData})
        }
    }

    render(){
        const {allTabs} = this.state
        return(
<div className='heading-all'>
    {allTabs.map(item=>(
        <HeadingPage key={item.id}  headingDetails={item} />
    ))}
</div>
        )
    }
}

export default AllTabsSection;