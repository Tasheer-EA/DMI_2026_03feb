// Innovation & Edge Tech Dimension Questions (10 points)
const quiz_5_innovation_edge = {
    id: 'inn',
    name: '5- Innovation & Edge Tech',
    points: 10,
    pillars: [
        {
            id: 'emerging_tech',
            name: '5.1 - Emerging technologies',
            groups: [
                {
                    id: 'strategy',
                    name: 'Strategy',
                    questions: [
                        {
                            id: 'q_5_1_strategy_1',
                            text: 'Is there a defined emerging technology adoption strategy?',
                            levels: ['None', 'Initial', 'Developing', 'Defined', 'Managed', 'Optimized']
                        },
                        {
                            id: 'q_5_1_strategy_2',
                            text: 'How actively does the organization explore new technologies?',
                            levels: ['Passive', 'Reactive', 'Selective', 'Proactive', 'Aggressive', 'Leading']
                        },
                        {
                            id: 'q_5_1_strategy_3',
                            text: 'Is there a dedicated innovation budget?',
                            levels: ['No', '<1%', '1-2%', '2-3%', '3-5%', '>5%']
                        }
                    ]
                },
                {
                    id: 'capability',
                    name: 'Capability',
                    questions: [
                        {
                            id: 'q_5_1_capability_1',
                            text: 'What is the AI/ML capability maturity?',
                            levels: ['Ad-hoc', 'Basic', 'Intermediate', 'Advanced', 'Expert', 'Industry Leading']
                        },
                        {
                            id: 'q_5_1_capability_2',
                            text: 'Are there data scientists and engineers on staff?',
                            levels: ['None', 'Limited', 'Adequate', 'Good', 'Excellent', 'Outstanding']
                        },
                        {
                            id: 'q_5_1_capability_3',
                            text: 'How mature is the innovation lab or R&D capability?',
                            levels: ['Minimal', 'Basic', 'Developing', 'Structured', 'Comprehensive', 'Optimized']
                        }
                    ]
                },
                {
                    id: 'operation',
                    name: 'Operation',
                    questions: [
                        {
                            id: 'q_5_1_operation_1',
                            text: 'How many AI/ML solutions are in production?',
                            levels: ['None', '1-2', '3-5', '5-10', '10-20', '>20']
                        },
                        {
                            id: 'q_5_1_operation_2',
                            text: 'What is the average time-to-pilot for new technologies?',
                            levels: ['>6 months', '3-6 months', '1-3 months', '2-4 weeks', '1-2 weeks', '<1 week']
                        },
                        {
                            id: 'q_5_1_operation_3',
                            text: 'How effective are innovation projects?',
                            levels: ['Poor', 'Below Average', 'Average', 'Good', 'Excellent', 'Outstanding']
                        }
                    ]
                },
                {
                    id: 'services',
                    name: 'Services',
                    questions: [
                        {
                            id: 'q_5_1_services_1',
                            text: 'Is there a technology innovation roadmap?',
                            levels: ['No', 'Informal', 'Partial', 'Documented', 'Managed', 'Continuously Improved']
                        },
                        {
                            id: 'q_5_1_services_2',
                            text: 'How engaged are stakeholders in innovation?',
                            levels: ['Very Low', 'Low', 'Average', 'Good', 'High', 'Very High']
                        },
                        {
                            id: 'q_5_1_services_3',
                            text: 'What percentage of revenue comes from new solutions?',
                            levels: ['<1%', '1-3%', '3-5%', '5-10%', '10-15%', '>15%']
                        }
                    ]
                },
                {
                    id: 'technology',
                    name: 'Technology',
                    questions: [
                        {
                            id: 'q_5_1_technology_1',
                            text: 'What emerging technologies are being evaluated?',
                            levels: ['None', 'Limited', 'Few', 'Several', 'Many', 'Comprehensive']
                        },
                        {
                            id: 'q_5_1_technology_2',
                            text: 'What is the cloud adoption level?',
                            levels: ['None', 'Minimal', 'Partial', 'Good', 'Extensive', 'Full Migration']
                        },
                        {
                            id: 'q_5_1_technology_3',
                            text: 'What is the API economy maturity?',
                            levels: ['None', 'Basic', 'Good', 'Advanced', 'Sophisticated', 'Ecosystem']
                        }
                    ]
                },
                {
                    id: 'beneficiary',
                    name: 'Beneficiary',
                    questions: [
                        {
                            id: 'q_5_1_beneficiary_1',
                            text: 'What is the competitive advantage from emerging tech?',
                            levels: ['Minimal', 'Low', 'Average', 'Good', 'High', 'Transformational']
                        },
                        {
                            id: 'q_5_1_beneficiary_2',
                            text: 'How effectively are innovations commercialized?',
                            levels: ['Poor', 'Below Average', 'Average', 'Good', 'Excellent', 'Outstanding']
                        },
                        {
                            id: 'q_5_1_beneficiary_3',
                            text: 'What is the innovation ROI?',
                            levels: ['Negative', 'Break-even', 'Low', 'Moderate', 'Good', 'Excellent']
                        }
                    ]
                }
            ]
        },
        {
            id: 'edge_computing',
            name: '5.2 - Edge computing',
            groups: [
                {
                    id: 'strategy',
                    name: 'Strategy',
                    questions: [
                        {
                            id: 'q_5_2_strategy_1',
                            text: 'Is there an edge computing strategy?',
                            levels: ['None', 'Initial', 'Developing', 'Defined', 'Managed', 'Optimized']
                        },
                        {
                            id: 'q_5_2_strategy_2',
                            text: 'How well defined is the edge infrastructure roadmap?',
                            levels: ['Minimal', 'Limited', 'Partial', 'Comprehensive', 'Complete', 'Optimized']
                        },
                        {
                            id: 'q_5_2_strategy_3',
                            text: 'Is edge computing aligned with IoT strategy?',
                            levels: ['No', 'Informal', 'Partial', 'Documented', 'Managed', 'Continuously Improved']
                        }
                    ]
                },
                {
                    id: 'capability',
                    name: 'Capability',
                    questions: [
                        {
                            id: 'q_5_2_capability_1',
                            text: 'What is the edge computing maturity level?',
                            levels: ['Ad-hoc', 'Basic', 'Intermediate', 'Advanced', 'Expert', 'Industry Leading']
                        },
                        {
                            id: 'q_5_2_capability_2',
                            text: 'Are there edge computing specialists on staff?',
                            levels: ['Insufficient', 'Limited', 'Adequate', 'Good', 'Excellent', 'Outstanding']
                        },
                        {
                            id: 'q_5_2_capability_3',
                            text: 'How mature is the IoT platform capability?',
                            levels: ['Minimal', 'Basic', 'Developing', 'Structured', 'Comprehensive', 'Optimized']
                        }
                    ]
                },
                {
                    id: 'operation',
                    name: 'Operation',
                    questions: [
                        {
                            id: 'q_5_2_operation_1',
                            text: 'How many edge nodes are currently deployed?',
                            levels: ['None', '1-10', '11-50', '51-100', '100-500', '>500']
                        },
                        {
                            id: 'q_5_2_operation_2',
                            text: 'What is the edge network latency?',
                            levels: ['>100ms', '50-100ms', '20-50ms', '10-20ms', '<10ms', '<5ms']
                        },
                        {
                            id: 'q_5_2_operation_3',
                            text: 'How reliable is edge infrastructure?',
                            levels: ['Poor', 'Below Average', 'Average', 'Good', 'Excellent', 'Outstanding']
                        }
                    ]
                },
                {
                    id: 'services',
                    name: 'Services',
                    questions: [
                        {
                            id: 'q_5_2_services_1',
                            text: 'Is there a defined edge computing service model?',
                            levels: ['No', 'Informal', 'Partial', 'Documented', 'Managed', 'Continuously Improved']
                        },
                        {
                            id: 'q_5_2_services_2',
                            text: 'How satisfied are edge applications users?',
                            levels: ['Very Low', 'Low', 'Average', 'Good', 'High', 'Very High']
                        },
                        {
                            id: 'q_5_2_services_3',
                            text: 'What is the edge service uptime percentage?',
                            levels: ['<95%', '95-97%', '97-99%', '99-99.5%', '99.5-99.9%', '>99.9%']
                        }
                    ]
                },
                {
                    id: 'technology',
                    name: 'Technology',
                    questions: [
                        {
                            id: 'q_5_2_technology_1',
                            text: 'What edge computing platform is used?',
                            levels: ['Custom', 'Basic Framework', 'Standard', 'Enterprise', 'Specialized', 'Proprietary']
                        },
                        {
                            id: 'q_5_2_technology_2',
                            text: 'How advanced is the edge-cloud synchronization?',
                            levels: ['Manual', 'Basic', 'Good', 'Advanced', 'Automated', 'Intelligent']
                        },
                        {
                            id: 'q_5_2_technology_3',
                            text: 'What security level is implemented at edge?',
                            levels: ['None', 'Basic', 'Good', 'Advanced', 'Enterprise', 'Military Grade']
                        }
                    ]
                },
                {
                    id: 'beneficiary',
                    name: 'Beneficiary',
                    questions: [
                        {
                            id: 'q_5_2_beneficiary_1',
                            text: 'What is the latency improvement from edge?',
                            levels: ['Minimal', 'Low', 'Moderate', 'Good', 'Significant', 'Transformational']
                        },
                        {
                            id: 'q_5_2_beneficiary_2',
                            text: 'How effectively does edge reduce bandwidth costs?',
                            levels: ['Poor', 'Below Average', 'Average', 'Good', 'Excellent', 'Outstanding']
                        },
                        {
                            id: 'q_5_2_beneficiary_3',
                            text: 'What is the reduction in cloud processing?',
                            levels: ['Minimal', 'Low', '10-20%', '20-30%', '30-50%', '>50%']
                        }
                    ]
                }
            ]
        }
    ]
};
