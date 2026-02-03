// Monitoring & Controls Dimension Questions (40 points)
const quiz_4_monitoring_controls = {
    id: 'mon',
    name: '4- Monitoring & Controls',
    points: 40,
    pillars: [
        {
            id: 'dev_ops_coverage',
            name: '4.1 - Development to operations coverage',
            groups: [
                {
                    id: 'strategy',
                    name: 'Strategy',
                    questions: [
                        {
                            id: 'q_4_1_strategy_1',
                            text: 'Is there a DevOps strategy aligned with business goals?',
                            levels: ['None', 'Initial', 'Developing', 'Defined', 'Managed', 'Optimized']
                        },
                        {
                            id: 'q_4_1_strategy_2',
                            text: 'How comprehensive is the DevOps maturity level?',
                            levels: ['Minimal', 'Limited', 'Partial', 'Comprehensive', 'Complete', 'Optimized']
                        },
                        {
                            id: 'q_4_1_strategy_3',
                            text: 'Is DevOps integrated across all application teams?',
                            levels: ['No', 'Informal', 'Partial', 'Documented', 'Managed', 'Continuously Improved']
                        }
                    ]
                },
                {
                    id: 'capability',
                    name: 'Capability',
                    questions: [
                        {
                            id: 'q_4_1_capability_1',
                            text: 'What is the maturity of CI/CD pipeline implementation?',
                            levels: ['Ad-hoc', 'Basic', 'Intermediate', 'Advanced', 'Expert', 'Industry Leading']
                        },
                        {
                            id: 'q_4_1_capability_2',
                            text: 'Are DevOps skills adequately distributed across teams?',
                            levels: ['Insufficient', 'Limited', 'Adequate', 'Good', 'Excellent', 'Outstanding']
                        },
                        {
                            id: 'q_4_1_capability_3',
                            text: 'How mature is infrastructure-as-code capability?',
                            levels: ['Minimal', 'Basic', 'Developing', 'Structured', 'Comprehensive', 'Optimized']
                        }
                    ]
                },
                {
                    id: 'operation',
                    name: 'Operation',
                    questions: [
                        {
                            id: 'q_4_1_operation_1',
                            text: 'What is the deployment frequency?',
                            levels: ['Monthly', 'Bi-weekly', 'Weekly', 'Daily', 'Multiple Daily', 'Continuous']
                        },
                        {
                            id: 'q_4_1_operation_2',
                            text: 'What is the deployment success rate?',
                            levels: ['<80%', '80-90%', '90-95%', '95-98%', '98-99%', '>99%']
                        },
                        {
                            id: 'q_4_1_operation_3',
                            text: 'How quickly can issues be rolled back?',
                            levels: ['>30min', '15-30min', '5-15min', '1-5min', '<1min', 'Automatic']
                        }
                    ]
                },
                {
                    id: 'services',
                    name: 'Services',
                    questions: [
                        {
                            id: 'q_4_1_services_1',
                            text: 'Is there a defined DevOps service model?',
                            levels: ['No', 'Informal', 'Partial', 'Documented', 'Managed', 'Continuously Improved']
                        },
                        {
                            id: 'q_4_1_services_2',
                            text: 'How satisfied are development and operations teams?',
                            levels: ['Very Low', 'Low', 'Average', 'Good', 'High', 'Very High']
                        },
                        {
                            id: 'q_4_1_services_3',
                            text: 'What is the average deployment window?',
                            levels: ['4+ hours', '2-4 hours', '1-2 hours', '30min-1hr', '<30min', 'Minutes']
                        }
                    ]
                },
                {
                    id: 'technology',
                    name: 'Technology',
                    questions: [
                        {
                            id: 'q_4_1_technology_1',
                            text: 'What is the containerization adoption level?',
                            levels: ['None', 'Pilot', 'Partial', 'Good', 'Extensive', 'Enterprise Scale']
                        },
                        {
                            id: 'q_4_1_technology_2',
                            text: 'How advanced is the orchestration platform?',
                            levels: ['Manual', 'Basic', 'Good', 'Advanced', 'Sophisticated', 'Autonomous']
                        },
                        {
                            id: 'q_4_1_technology_3',
                            text: 'What level of infrastructure automation exists?',
                            levels: ['None', 'Minimal', 'Partial', 'Good', 'Extensive', 'Full Automation']
                        }
                    ]
                },
                {
                    id: 'beneficiary',
                    name: 'Beneficiary',
                    questions: [
                        {
                            id: 'q_4_1_beneficiary_1',
                            text: 'What is the time-to-market improvement?',
                            levels: ['Increased', 'No Change', 'Minimal', 'Moderate', 'Good', 'Significant']
                        },
                        {
                            id: 'q_4_1_beneficiary_2',
                            text: 'How effectively does DevOps reduce deployment failures?',
                            levels: ['Poor', 'Below Average', 'Average', 'Good', 'Excellent', 'Outstanding']
                        },
                        {
                            id: 'q_4_1_beneficiary_3',
                            text: 'What is the operational cost reduction?',
                            levels: ['Increased', 'No Change', 'Minimal', 'Moderate', 'Good', 'Significant']
                        }
                    ]
                }
            ]
        },
        {
            id: 'system_observability',
            name: '4.2 - System observability and Infrastructure usage',
            groups: [
                {
                    id: 'strategy',
                    name: 'Strategy',
                    questions: [
                        {
                            id: 'q_4_2_strategy_1',
                            text: 'Is there an observability strategy for all systems?',
                            levels: ['None', 'Initial', 'Developing', 'Defined', 'Managed', 'Optimized']
                        },
                        {
                            id: 'q_4_2_strategy_2',
                            text: 'How comprehensive is infrastructure monitoring?',
                            levels: ['Minimal', 'Limited', 'Partial', 'Comprehensive', 'Complete', 'Optimized']
                        },
                        {
                            id: 'q_4_2_strategy_3',
                            text: 'Is observability aligned with business KPIs?',
                            levels: ['No', 'Informal', 'Partial', 'Documented', 'Managed', 'Continuously Improved']
                        }
                    ]
                },
                {
                    id: 'capability',
                    name: 'Capability',
                    questions: [
                        {
                            id: 'q_4_2_capability_1',
                            text: 'What is the maturity of the monitoring platform?',
                            levels: ['Ad-hoc', 'Basic', 'Intermediate', 'Advanced', 'Expert', 'Industry Leading']
                        },
                        {
                            id: 'q_4_2_capability_2',
                            text: 'Are there skilled platform engineers on staff?',
                            levels: ['Insufficient', 'Limited', 'Adequate', 'Good', 'Excellent', 'Outstanding']
                        },
                        {
                            id: 'q_4_2_capability_3',
                            text: 'How mature is the data analytics capability?',
                            levels: ['Minimal', 'Basic', 'Developing', 'Structured', 'Comprehensive', 'Optimized']
                        }
                    ]
                },
                {
                    id: 'operation',
                    name: 'Operation',
                    questions: [
                        {
                            id: 'q_4_2_operation_1',
                            text: 'Are all infrastructure components being monitored?',
                            levels: ['No', 'Rarely', 'Sometimes', 'Usually', 'Consistently', 'Exceeding']
                        },
                        {
                            id: 'q_4_2_operation_2',
                            text: 'What is the average alert response time?',
                            levels: ['>30min', '10-30min', '5-10min', '<5min', '<1min', 'Automatic']
                        },
                        {
                            id: 'q_4_2_operation_3',
                            text: 'How effective is capacity planning?',
                            levels: ['Poor', 'Below Average', 'Average', 'Good', 'Excellent', 'Outstanding']
                        }
                    ]
                },
                {
                    id: 'services',
                    name: 'Services',
                    questions: [
                        {
                            id: 'q_4_2_services_1',
                            text: 'Is there a defined observability SLA?',
                            levels: ['No', 'Informal', 'Partial', 'Documented', 'Managed', 'Continuously Improved']
                        },
                        {
                            id: 'q_4_2_services_2',
                            text: 'How satisfied are operations teams with observability tools?',
                            levels: ['Very Low', 'Low', 'Average', 'Good', 'High', 'Very High']
                        },
                        {
                            id: 'q_4_2_services_3',
                            text: 'What percentage of systems have real-time visibility?',
                            levels: ['<30%', '30-50%', '50-70%', '70-85%', '85-95%', '>95%']
                        }
                    ]
                },
                {
                    id: 'technology',
                    name: 'Technology',
                    questions: [
                        {
                            id: 'q_4_2_technology_1',
                            text: 'What is the log aggregation maturity?',
                            levels: ['None', 'Basic', 'Good', 'Advanced', 'Sophisticated', 'AI-powered']
                        },
                        {
                            id: 'q_4_2_technology_2',
                            text: 'How advanced is the metrics collection?',
                            levels: ['Basic', 'Good', 'Advanced', 'Sophisticated', 'Custom', 'Predictive']
                        },
                        {
                            id: 'q_4_2_technology_3',
                            text: 'What is the infrastructure utilization optimization level?',
                            levels: ['Manual', 'Basic', 'Good', 'Advanced', 'Automated', 'AI-optimized']
                        }
                    ]
                },
                {
                    id: 'beneficiary',
                    name: 'Beneficiary',
                    questions: [
                        {
                            id: 'q_4_2_beneficiary_1',
                            text: 'What is the reduction in MTTR (Mean Time to Repair)?',
                            levels: ['Increased', 'No Change', 'Minimal', 'Moderate', 'Good', 'Significant']
                        },
                        {
                            id: 'q_4_2_beneficiary_2',
                            text: 'How effectively does observability prevent incidents?',
                            levels: ['Poor', 'Below Average', 'Average', 'Good', 'Excellent', 'Outstanding']
                        },
                        {
                            id: 'q_4_2_beneficiary_3',
                            text: 'What is the infrastructure cost optimization?',
                            levels: ['Increased', 'No Change', 'Minimal', 'Moderate', 'Good', 'Significant']
                        }
                    ]
                }
            ]
        }
    ]
};
