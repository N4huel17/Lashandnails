import React from 'react'
import Metrics from './dashboard/Metrics'
import '../public/css/admin.css'
import Availability from './dashboard/Availability'
import ServicesClass from './dashboard/ServicesClass'
export default function DashboardComponent() {
  return (
    <div className="container-fluid">
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
    </div>
    <Metrics/>

    

    <div className="row">
      <Availability/>

      <ServicesClass/>

      
    </div>
</div>
  )
}
