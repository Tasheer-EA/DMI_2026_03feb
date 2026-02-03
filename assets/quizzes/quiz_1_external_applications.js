// External Application Dimension Questions (40 points)
const quiz_1_external_applications = {
    id: 'ext_app',
    name: '1- External Application',
    points: 40,
    pillars: [
        {
            id: 'tasheer_branch_apps',
            name: '1.1 - Tasheer branch applications',
            groups: [
                {
                    id: 'strategy',
                    name: 'Strategy',
                    questions: [
                        {
                            id: 'q_1_1_strategy_1',
                            text: 'Are there documented strategic plans for Tasheer branch applications aligned with organizational goals?',
                            levels: ['None', 'Initial', 'Developing', 'Defined', 'Managed', 'Optimized']
                        },
                        {
                            id: 'q_1_1_strategy_2',
                            text: 'How often is the branch application strategy reviewed and updated?',
                            levels: ['Never', 'Annually', 'Semi-annually', 'Quarterly', 'Monthly', 'Continuous']
                        },
                        {
                            id: 'q_1_1_strategy_3',
                            text: 'Is there stakeholder alignment on the branch application roadmap?',
                            levels: ['No', 'Partial', 'Limited', 'Defined', 'Managed', 'Optimized']
                        }
                    ]
                },
                {
                    id: 'capability',
                    name: 'Capability',
                    questions: [
                        {
                            id: 'q_1_1_capability_1',
                            text: 'What is the technical capability maturity of the current branch application infrastructure?',
                            levels: ['Ad-hoc', 'Basic', 'Intermediate', 'Advanced', 'Expert', 'Industry Leading']
                        },
                        {
                            id: 'q_1_1_capability_2',
                            text: 'Are branch applications adequately supported by trained personnel?',
                            levels: ['Insufficient', 'Limited', 'Adequate', 'Good', 'Excellent', 'Outstanding']
                        },
                        {
                            id: 'q_1_1_capability_3',
                            text: 'How mature is the knowledge management for branch applications?',
                            levels: ['Minimal', 'Basic', 'Developing', 'Structured', 'Comprehensive', 'Optimized']
                        }
                    ]
                },
                {
                    id: 'operation',
                    name: 'Operation',
                    questions: [
                        {
                            id: 'q_1_1_operation_1',
                            text: 'Are branch applications operating within agreed SLA targets?',
                            levels: ['No', 'Rarely', 'Sometimes', 'Usually', 'Consistently', 'Exceeding']
                        },
                        {
                            id: 'q_1_1_operation_2',
                            text: 'What is the system uptime percentage for branch applications?',
                            levels: ['<95%', '95-97%', '97-99%', '99-99.5%', '99.5-99.9%', '>99.9%']
                        },
                        {
                            id: 'q_1_1_operation_3',
                            text: 'How effectively are operational incidents managed and resolved?',
                            levels: ['Poor', 'Below Average', 'Average', 'Good', 'Excellent', 'Outstanding']
                        }
                    ]
                },
                {
                    id: 'services',
                    name: 'Services',
                    questions: [
                        {
                            id: 'q_1_1_services_1',
                            text: 'Is there a formal service catalog for branch applications?',
                            levels: ['No', 'Informal', 'Partial', 'Documented', 'Managed', 'Continuously Improved']
                        },
                        {
                            id: 'q_1_1_services_2',
                            text: 'How well do branch applications meet end-user service expectations?',
                            levels: ['Poor', 'Below Average', 'Average', 'Good', 'Excellent', 'Outstanding']
                        },
                        {
                            id: 'q_1_1_services_3',
                            text: 'What is the service availability ratio across all branch locations?',
                            levels: ['<80%', '80-85%', '85-90%', '90-95%', '95-98%', '>98%']
                        }
                    ]
                },
                {
                    id: 'technology',
                    name: 'Technology',
                    questions: [
                        {
                            id: 'q_1_1_technology_1',
                            text: 'Is the technology stack for branch applications current and supported?',
                            levels: ['Obsolete', 'Aging', 'Current', 'Modern', 'Leading Edge', 'Cutting Edge']
                        },
                        {
                            id: 'q_1_1_technology_2',
                            text: 'How well integrated are branch applications with the core systems?',
                            levels: ['Disconnected', 'Minimal', 'Basic', 'Integrated', 'Seamless', 'Autonomous']
                        },
                        {
                            id: 'q_1_1_technology_3',
                            text: 'What is the mobile accessibility level of branch applications?',
                            levels: ['None', 'Limited', 'Partial', 'Good', 'Excellent', 'Full Cross-platform']
                        }
                    ]
                },
                {
                    id: 'beneficiary',
                    name: 'Beneficiary',
                    questions: [
                        {
                            id: 'q_1_1_beneficiary_1',
                            text: 'What is the branch staff satisfaction level with current applications?',
                            levels: ['Very Low', 'Low', 'Average', 'Good', 'High', 'Very High']
                        },
                        {
                            id: 'q_1_1_beneficiary_2',
                            text: 'How frequently do branch staff provide feedback on application improvements?',
                            levels: ['Never', 'Rarely', 'Occasionally', 'Regularly', 'Frequently', 'Continuously']
                        },
                        {
                            id: 'q_1_1_beneficiary_3',
                            text: 'Is there measurable improvement in branch operations due to the applications?',
                            levels: ['No', 'Minimal', 'Some', 'Significant', 'Major', 'Transformational']
                        }
                    ]
                }
            ]
        },
        {
            id: 'national_integrations',
            name: '1.2 - National platform integrations',
            groups: [
                {
                    id: 'strategy',
                    name: 'Strategy',
                    questions: [
                        {
                            id: 'q_1_2_strategy_1',
                            text: 'Is there a strategic roadmap for national platform integration?',
                            levels: ['None', 'Initial', 'Developing', 'Defined', 'Managed', 'Optimized']
                        },
                        {
                            id: 'q_1_2_strategy_2',
                            text: 'How well aligned are national integrations with national regulations?',
                            levels: ['Poor', 'Below Average', 'Average', 'Good', 'Excellent', 'Outstanding']
                        },
                        {
                            id: 'q_1_2_strategy_3',
                            text: 'What is the scope of national platform coverage?',
                            levels: ['Minimal', 'Limited', 'Partial', 'Comprehensive', 'Complete', 'Optimized']
                        }
                    ]
                },
                {
                    id: 'capability',
                    name: 'Capability',
                    questions: [
                        {
                            id: 'q_1_2_capability_1',
                            text: 'What is the API capability maturity for national platform connections?',
                            levels: ['Ad-hoc', 'Basic', 'Intermediate', 'Advanced', 'Expert', 'Industry Leading']
                        },
                        {
                            id: 'q_1_2_capability_2',
                            text: 'Is there adequate expertise for managing national platform integrations?',
                            levels: ['Insufficient', 'Limited', 'Adequate', 'Good', 'Excellent', 'Outstanding']
                        },
                        {
                            id: 'q_1_2_capability_3',
                            text: 'How mature is the integration testing capability?',
                            levels: ['Minimal', 'Basic', 'Developing', 'Structured', 'Comprehensive', 'Optimized']
                        }
                    ]
                },
                {
                    id: 'operation',
                    name: 'Operation',
                    questions: [
                        {
                            id: 'q_1_2_operation_1',
                            text: 'Are national platform integrations performing within SLAs?',
                            levels: ['No', 'Rarely', 'Sometimes', 'Usually', 'Consistently', 'Exceeding']
                        },
                        {
                            id: 'q_1_2_operation_2',
                            text: 'What is the integration latency performance?',
                            levels: ['>5sec', '3-5sec', '1-3sec', '<1sec', '<500ms', '<100ms']
                        },
                        {
                            id: 'q_1_2_operation_3',
                            text: 'How are integration failures detected and resolved?',
                            levels: ['Manual', 'Reactive', 'Semi-automated', 'Automated', 'Proactive', 'Predictive']
                        }
                    ]
                },
                {
                    id: 'services',
                    name: 'Services',
                    questions: [
                        {
                            id: 'q_1_2_services_1',
                            text: 'Is there a defined SLA for national platform integrations?',
                            levels: ['No', 'Informal', 'Partial', 'Documented', 'Managed', 'Continuously Improved']
                        },
                        {
                            id: 'q_1_2_services_2',
                            text: 'How satisfied are national platform partners with integration quality?',
                            levels: ['Very Low', 'Low', 'Average', 'Good', 'High', 'Very High']
                        },
                        {
                            id: 'q_1_2_services_3',
                            text: 'What is the data accuracy rate for national platform exchanges?',
                            levels: ['<95%', '95-97%', '97-99%', '99-99.5%', '99.5-99.9%', '>99.9%']
                        }
                    ]
                },
                {
                    id: 'technology',
                    name: 'Technology',
                    questions: [
                        {
                            id: 'q_1_2_technology_1',
                            text: 'Are integration technologies compliant with national standards?',
                            levels: ['Non-compliant', 'Partially', 'Mostly', 'Fully', 'Enhanced', 'Leading']
                        },
                        {
                            id: 'q_1_2_technology_2',
                            text: 'How scalable is the integration infrastructure?',
                            levels: ['Limited', 'Moderate', 'Scalable', 'Highly Scalable', 'Auto-scaling', 'Enterprise Scale']
                        },
                        {
                            id: 'q_1_2_technology_3',
                            text: 'What encryption standard is used for data transmission?',
                            levels: ['None', 'Basic', 'SSL', 'TLS 1.1', 'TLS 1.2+', 'TLS 1.3+']
                        }
                    ]
                },
                {
                    id: 'beneficiary',
                    name: 'Beneficiary',
                    questions: [
                        {
                            id: 'q_1_2_beneficiary_1',
                            text: 'What is the business value realized from national integrations?',
                            levels: ['Minimal', 'Low', 'Average', 'Good', 'High', 'Transformational']
                        },
                        {
                            id: 'q_1_2_beneficiary_2',
                            text: 'How often are national platform integrations updated for new requirements?',
                            levels: ['Annually', 'Semi-annually', 'Quarterly', 'Monthly', 'Bi-weekly', 'Weekly']
                        },
                        {
                            id: 'q_1_2_beneficiary_3',
                            text: 'What is the time-to-integrate new national platforms?',
                            levels: ['>6 months', '3-6 months', '1-3 months', '2-4 weeks', '1-2 weeks', '<1 week']
                        }
                    ]
                }
            ]
        }
    ]
};
