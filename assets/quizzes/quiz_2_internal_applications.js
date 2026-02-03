// Internal Applications Dimension Questions (40 points)
const quiz_2_internal_applications = {
    id: 'int_app',
    name: '2- Internal Applications',
    points: 40,
    pillars: [
        {
            id: 'sap_erp',
            name: '2.1 - SAP ERP and enterprise modules',
            groups: [
                {
                    id: 'strategy',
                    name: 'Strategy',
                    questions: [
                        {
                            id: 'q_2_1_strategy_1',
                            text: 'Is there a documented SAP ERP strategy aligned with business objectives?',
                            levels: ['None', 'Initial', 'Developing', 'Defined', 'Managed', 'Optimized']
                        },
                        {
                            id: 'q_2_1_strategy_2',
                            text: 'How comprehensive is the SAP module coverage across business processes?',
                            levels: ['Minimal', 'Limited', 'Partial', 'Comprehensive', 'Complete', 'Optimized']
                        },
                        {
                            id: 'q_2_1_strategy_3',
                            text: 'Is there a long-term roadmap for SAP upgrades and innovation?',
                            levels: ['No', 'Informal', 'Partial', 'Documented', 'Managed', 'Continuously Improved']
                        }
                    ]
                },
                {
                    id: 'capability',
                    name: 'Capability',
                    questions: [
                        {
                            id: 'q_2_1_capability_1',
                            text: 'What is the maturity of SAP implementation and customization expertise?',
                            levels: ['Ad-hoc', 'Basic', 'Intermediate', 'Advanced', 'Expert', 'Industry Leading']
                        },
                        {
                            id: 'q_2_1_capability_2',
                            text: 'Are there adequate SAP certified professionals on staff?',
                            levels: ['None', 'Limited', 'Adequate', 'Good', 'Excellent', 'Outstanding']
                        },
                        {
                            id: 'q_2_1_capability_3',
                            text: 'How mature is the SAP development and testing environment?',
                            levels: ['Minimal', 'Basic', 'Developing', 'Structured', 'Comprehensive', 'Optimized']
                        }
                    ]
                },
                {
                    id: 'operation',
                    name: 'Operation',
                    questions: [
                        {
                            id: 'q_2_1_operation_1',
                            text: 'Is SAP ERP operating within performance SLAs?',
                            levels: ['No', 'Rarely', 'Sometimes', 'Usually', 'Consistently', 'Exceeding']
                        },
                        {
                            id: 'q_2_1_operation_2',
                            text: 'What is the response time for critical SAP transactions?',
                            levels: ['>10sec', '5-10sec', '2-5sec', '<2sec', '<1sec', '<500ms']
                        },
                        {
                            id: 'q_2_1_operation_3',
                            text: 'How effective is SAP batch processing and data loading?',
                            levels: ['Poor', 'Below Average', 'Average', 'Good', 'Excellent', 'Outstanding']
                        }
                    ]
                },
                {
                    id: 'services',
                    name: 'Services',
                    questions: [
                        {
                            id: 'q_2_1_services_1',
                            text: 'Is there a defined SAP support model and SLA?',
                            levels: ['No', 'Informal', 'Partial', 'Documented', 'Managed', 'Continuously Improved']
                        },
                        {
                            id: 'q_2_1_services_2',
                            text: 'How satisfied are end users with SAP service quality?',
                            levels: ['Very Low', 'Low', 'Average', 'Good', 'High', 'Very High']
                        },
                        {
                            id: 'q_2_1_services_3',
                            text: 'What is the average ticket resolution time?',
                            levels: ['>48hrs', '24-48hrs', '12-24hrs', '4-12hrs', '1-4hrs', '<1hr']
                        }
                    ]
                },
                {
                    id: 'technology',
                    name: 'Technology',
                    questions: [
                        {
                            id: 'q_2_1_technology_1',
                            text: 'Is SAP ERP running on current and supported versions?',
                            levels: ['Very Old', 'Old', 'Current', 'Recent', 'Latest', 'Cutting Edge']
                        },
                        {
                            id: 'q_2_1_technology_2',
                            text: 'How robust is the SAP database infrastructure?',
                            levels: ['Basic', 'Moderate', 'Good', 'Robust', 'Highly Available', 'Enterprise Grade']
                        },
                        {
                            id: 'q_2_1_technology_3',
                            text: 'What disaster recovery capability exists for SAP?',
                            levels: ['None', 'Backup Only', 'Basic DR', 'Documented', 'Tested', 'Real-time Sync']
                        }
                    ]
                },
                {
                    id: 'beneficiary',
                    name: 'Beneficiary',
                    questions: [
                        {
                            id: 'q_2_1_beneficiary_1',
                            text: 'What is the business process efficiency improvement from SAP?',
                            levels: ['Minimal', 'Low', 'Average', 'Good', 'High', 'Transformational']
                        },
                        {
                            id: 'q_2_1_beneficiary_2',
                            text: 'How effectively does SAP support data-driven decision making?',
                            levels: ['Poor', 'Below Average', 'Average', 'Good', 'Excellent', 'Outstanding']
                        },
                        {
                            id: 'q_2_1_beneficiary_3',
                            text: 'What ROI has been achieved from the SAP investment?',
                            levels: ['Negative', 'Break-even', 'Low', 'Moderate', 'Good', 'Excellent']
                        }
                    ]
                }
            ]
        },
        {
            id: 'itsm_onclick',
            name: '2.2 - ITSM services through OnClick',
            groups: [
                {
                    id: 'strategy',
                    name: 'Strategy',
                    questions: [
                        {
                            id: 'q_2_2_strategy_1',
                            text: 'Is there a documented ITSM strategy aligned with IT service delivery?',
                            levels: ['None', 'Initial', 'Developing', 'Defined', 'Managed', 'Optimized']
                        },
                        {
                            id: 'q_2_2_strategy_2',
                            text: 'How comprehensive is ITIL process coverage in OnClick?',
                            levels: ['Minimal', 'Limited', 'Partial', 'Comprehensive', 'Complete', 'Optimized']
                        },
                        {
                            id: 'q_2_2_strategy_3',
                            text: 'Is there organizational commitment to ITSM best practices?',
                            levels: ['Low', 'Below Average', 'Average', 'Good', 'High', 'Excellent']
                        }
                    ]
                },
                {
                    id: 'capability',
                    name: 'Capability',
                    questions: [
                        {
                            id: 'q_2_2_capability_1',
                            text: 'What is the maturity of OnClick ITSM implementation?',
                            levels: ['Ad-hoc', 'Basic', 'Intermediate', 'Advanced', 'Expert', 'Industry Leading']
                        },
                        {
                            id: 'q_2_2_capability_2',
                            text: 'Are IT staff adequately trained on OnClick ITSM processes?',
                            levels: ['Insufficient', 'Limited', 'Adequate', 'Good', 'Excellent', 'Outstanding']
                        },
                        {
                            id: 'q_2_2_capability_3',
                            text: 'How mature is the knowledge base in OnClick?',
                            levels: ['Minimal', 'Basic', 'Developing', 'Structured', 'Comprehensive', 'Optimized']
                        }
                    ]
                },
                {
                    id: 'operation',
                    name: 'Operation',
                    questions: [
                        {
                            id: 'q_2_2_operation_1',
                            text: 'Are incident tickets being resolved within target times?',
                            levels: ['No', 'Rarely', 'Sometimes', 'Usually', 'Consistently', 'Exceeding']
                        },
                        {
                            id: 'q_2_2_operation_2',
                            text: 'What is the first contact resolution rate?',
                            levels: ['<30%', '30-50%', '50-70%', '70-85%', '85-95%', '>95%']
                        },
                        {
                            id: 'q_2_2_operation_3',
                            text: 'How effective is change management through OnClick?',
                            levels: ['Poor', 'Below Average', 'Average', 'Good', 'Excellent', 'Outstanding']
                        }
                    ]
                },
                {
                    id: 'services',
                    name: 'Services',
                    questions: [
                        {
                            id: 'q_2_2_services_1',
                            text: 'Is there a defined IT service catalog in OnClick?',
                            levels: ['No', 'Informal', 'Partial', 'Documented', 'Managed', 'Continuously Improved']
                        },
                        {
                            id: 'q_2_2_services_2',
                            text: 'How satisfied are IT users with OnClick service delivery?',
                            levels: ['Very Low', 'Low', 'Average', 'Good', 'High', 'Very High']
                        },
                        {
                            id: 'q_2_2_services_3',
                            text: 'What is the availability of IT support services?',
                            levels: ['8x5', '16x5', '24x5', '24x6', '24x7', '24x7 Premium']
                        }
                    ]
                },
                {
                    id: 'technology',
                    name: 'Technology',
                    questions: [
                        {
                            id: 'q_2_2_technology_1',
                            text: 'Is OnClick running on current and supported version?',
                            levels: ['Very Old', 'Old', 'Current', 'Recent', 'Latest', 'Cutting Edge']
                        },
                        {
                            id: 'q_2_2_technology_2',
                            text: 'How well integrated is OnClick with other IT systems?',
                            levels: ['Isolated', 'Basic', 'Good', 'Integrated', 'Seamless', 'Fully Automated']
                        },
                        {
                            id: 'q_2_2_technology_3',
                            text: 'What mobile access capability does OnClick have?',
                            levels: ['None', 'Limited', 'Partial', 'Good', 'Excellent', 'Full Cross-platform']
                        }
                    ]
                },
                {
                    id: 'beneficiary',
                    name: 'Beneficiary',
                    questions: [
                        {
                            id: 'q_2_2_beneficiary_1',
                            text: 'What is the improvement in IT service quality since OnClick implementation?',
                            levels: ['Minimal', 'Low', 'Average', 'Good', 'High', 'Transformational']
                        },
                        {
                            id: 'q_2_2_beneficiary_2',
                            text: 'How effectively does OnClick reduce support costs?',
                            levels: ['Increased', 'Minimal', 'Low', 'Moderate', 'Good', 'Significant']
                        },
                        {
                            id: 'q_2_2_beneficiary_3',
                            text: 'What is the end-user satisfaction with IT services?',
                            levels: ['Very Low', 'Low', 'Average', 'Good', 'High', 'Very High']
                        }
                    ]
                }
            ]
        }
    ]
};
