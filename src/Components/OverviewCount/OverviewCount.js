

import OverviewCountBox from "../OverviewCountBox/OverviewCountBox"
import "./overview-count.css"
const OverviewCount = () => {
    return (
        <div className="overview-count">
            <OverviewCountBox name="Unresolved" number="60"/>
            <OverviewCountBox name="Overdue" number="16"/>
            <OverviewCountBox name="Open" number="43"/>
            <OverviewCountBox name="On hold" number="64" />
        </div>
    )
}

export default OverviewCount