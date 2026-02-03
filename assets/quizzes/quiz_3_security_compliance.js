// Security & Compliance Dimension Questions (20 points)
const quiz_3_security_compliance = {
    id: 'sec',
    name: '3- Security & Compliance',
    points: 20,
    pillars: [
        {
            id: 'regulatory_alignment',
            name: '3.1 - Regulatory alignment',
            groups: [
                {
                    id: 'strategy',
                    name: 'Strategy',
                    questions: [
                        {
                            id: 'q_3_1_strategy_1',
                            text: 'Is there a documented compliance and regulatory strategy?',
                            levels: ['None', 'Initial', 'Developing', 'Defined', 'Managed', 'Optimized']
                        },
                        {
                            id: 'q_3_1_strategy_2',
                            text: 'How comprehensive is the coverage of applicable regulations?',
                            levels: ['Minimal', 'Limited', 'Partial', 'Comprehensive', 'Complete', 'Optimized']
                        },
                        {
                            id: 'q_3_1_strategy_3',
                            text: 'Is compliance monitoring integrated into business strategy?',
                            levels: ['No', 'Informal', 'Partial', 'Documented', 'Managed', 'Continuously Improved']
                        }
                    ]
                },
                {
                    id: 'capability',
                    name: 'Capability',
                    questions: [
                        {
                            id: 'q_3_1_capability_1',
                            text: 'What is the maturity of compliance management processes?',
                            levels: ['Ad-hoc', 'Basic', 'Intermediate', 'Advanced', 'Expert', 'Industry Leading']
                        },
                        {
                            id: 'q_3_1_capability_2',
                            text: 'Are there qualified compliance professionals on staff?',
                            levels: ['Insufficient', 'Limited', 'Adequate', 'Good', 'Excellent', 'Outstanding']
                        },
                        {
                            id: 'q_3_1_capability_3',
                            text: 'How mature is the regulatory reporting capability?',
                            levels: ['Minimal', 'Basic', 'Developing', 'Structured', 'Comprehensive', 'Optimized']
                        }
                    ]
                },
                {
                    id: 'operation',
                    name: 'Operation',
                    questions: [
                        {
                            id: 'q_3_1_operation_1',
                            text: 'Are all regulatory compliance requirements being met?',
                            levels: ['No', 'Rarely', 'Sometimes', 'Usually', 'Consistently', 'Exceeding']
                        },
                        {
                            id: 'q_3_1_operation_2',
                            text: 'What is the frequency of compliance audits?',
                            levels: ['None', 'Ad-hoc', 'Annually', 'Semi-annually', 'Quarterly', 'Continuous']
                        },
                        {
                            id: 'q_3_1_operation_3',
                            text: 'How quickly are compliance violations addressed?',
                            levels: ['Not tracked', 'Reactive', 'Semi-planned', 'Planned', 'Proactive', 'Predictive']
                        }
                    ]
                },
                {
                    id: 'services',
                    name: 'Services',
                    questions: [
                        {
                            id: 'q_3_1_services_1',
                            text: 'Is there a compliance communication plan?',
                            levels: ['No', 'Informal', 'Partial', 'Documented', 'Managed', 'Continuously Improved']
                        },
                        {
                            id: 'q_3_1_services_2',
                            text: 'How satisfied are regulators with compliance efforts?',
                            levels: ['Very Low', 'Low', 'Average', 'Good', 'High', 'Very High']
                        },
                        {
                            id: 'q_3_1_services_3',
                            text: 'What is the regulatory inspection pass rate?',
                            levels: ['<50%', '50-70%', '70-85%', '85-95%', '95-99%', '100%']
                        }
                    ]
                },
                {
                    id: 'technology',
                    name: 'Technology',
                    questions: [
                        {
                            id: 'q_3_1_technology_1',
                            text: 'Are compliance monitoring tools current and effective?',
                            levels: ['Manual', 'Basic', 'Good', 'Advanced', 'Sophisticated', 'AI-powered']
                        },
                        {
                            id: 'q_3_1_technology_2',
                            text: 'How automated is regulatory reporting?',
                            levels: ['None', 'Minimal', 'Partial', 'Good', 'Highly', 'Fully Automated']
                        },
                        {
                            id: 'q_3_1_technology_3',
                            text: 'What is the audit trail capability for compliance?',
                            levels: ['None', 'Basic', 'Good', 'Comprehensive', 'Real-time', 'AI-analyzed']
                        }
                    ]
                },
                {
                    id: 'beneficiary',
                    name: 'Beneficiary',
                    questions: [
                        {
                            id: 'q_3_1_beneficiary_1',
                            text: 'What is the reduction in compliance violations?',
                            levels: ['Increased', 'No Change', 'Minimal', 'Moderate', 'Good', 'Significant']
                        },
                        {
                            id: 'q_3_1_beneficiary_2',
                            text: 'How effective is compliance training?',
                            levels: ['Poor', 'Below Average', 'Average', 'Good', 'Excellent', 'Outstanding']
                        },
                        {
                            id: 'q_3_1_beneficiary_3',
                            text: 'What is the regulatory fine reduction?',
                            levels: ['Increased', 'No Change', 'Minimal', 'Moderate', 'Good', 'Significant']
                        }
                    ]
                }
            ]
        },
        {
            id: 'continuous_monitoring',
            name: '3.2 - Continuous monitoring',
            groups: [
                {
                    id: 'strategy',
                    name: 'Strategy',
                    questions: [
                        {
                            id: 'q_3_2_strategy_1',
                            text: 'Is there a continuous monitoring strategy defined?',
                            levels: ['None', 'Initial', 'Developing', 'Defined', 'Managed', 'Optimized']
                        },
                        {
                            id: 'q_3_2_strategy_2',
                            text: 'How comprehensive is the monitoring scope?',
                            levels: ['Minimal', 'Limited', 'Partial', 'Comprehensive', 'Complete', 'Optimized']
                        },
                        {
                            id: 'q_3_2_strategy_3',
                            text: 'Is continuous monitoring aligned with risk management?',
                            levels: ['No', 'Informal', 'Partial', 'Documented', 'Managed', 'Continuously Improved']
                        }
                    ]
                },
                {
                    id: 'capability',
                    name: 'Capability',
                    questions: [
                        {
                            id: 'q_3_2_capability_1',
                            text: 'What is the maturity of monitoring infrastructure?',
                            levels: ['Ad-hoc', 'Basic', 'Intermediate', 'Advanced', 'Expert', 'Industry Leading']
                        },
                        {
                            id: 'q_3_2_capability_2',
                            text: 'Are there qualified security monitoring professionals?',
                            levels: ['Insufficient', 'Limited', 'Adequate', 'Good', 'Excellent', 'Outstanding']
                        },
                        {
                            id: 'q_3_2_capability_3',
                            text: 'How mature is the incident response capability?',
                            levels: ['Minimal', 'Basic', 'Developing', 'Structured', 'Comprehensive', 'Optimized']
                        }
                    ]
                },
                {
                    id: 'operation',
                    name: 'Operation',
                    questions: [
                        {
                            id: 'q_3_2_operation_1',
                            text: 'Are all systems being actively monitored 24x7?',
                            levels: ['No', 'Rarely', 'Sometimes', 'Usually', 'Consistently', 'Exceeding']
                        },
                        {
                            id: 'q_3_2_operation_2',
                            text: 'What is the average threat detection time?',
                            levels: ['>1hr', '30min-1hr', '10-30min', '<10min', '<1min', 'Real-time']
                        },
                        {
                            id: 'q_3_2_operation_3',
                            text: 'How effective is incident response?',
                            levels: ['Poor', 'Below Average', 'Average', 'Good', 'Excellent', 'Outstanding']
                        }
                    ]
                },
                {
                    id: 'services',
                    name: 'Services',
                    questions: [
                        {
                            id: 'q_3_2_services_1',
                            text: 'Is there a defined monitoring SLA?',
                            levels: ['No', 'Informal', 'Partial', 'Documented', 'Managed', 'Continuously Improved']
                        },
                        {
                            id: 'q_3_2_services_2',
                            text: 'How satisfied are stakeholders with security monitoring?',
                            levels: ['Very Low', 'Low', 'Average', 'Good', 'High', 'Very High']
                        },
                        {
                            id: 'q_3_2_services_3',
                            text: 'What is the security alert accuracy?',
                            levels: ['<50%', '50-70%', '70-85%', '85-95%', '95-99%', '>99%']
                        }
                    ]
                },
                {
                    id: 'technology',
                    name: 'Technology',
                    questions: [
                        {
                            id: 'q_3_2_technology_1',
                            text: 'Are monitoring tools current and integrated?',
                            levels: ['Outdated', 'Basic', 'Good', 'Advanced', 'Sophisticated', 'State-of-the-art']
                        },
                        {
                            id: 'q_3_2_technology_2',
                            text: 'What is the log collection and analysis capability?',
                            levels: ['Manual', 'Basic', 'Good', 'Advanced', 'Sophisticated', 'AI-powered']
                        },
                        {
                            id: 'q_3_2_technology_3',
                            text: 'How advanced is the threat intelligence integration?',
                            levels: ['None', 'Basic', 'Good', 'Advanced', 'Real-time', 'Predictive AI']
                        }
                    ]
                },
                {
                    id: 'beneficiary',
                    name: 'Beneficiary',
                    questions: [
                        {
                            id: 'q_3_2_beneficiary_1',
                            text: 'What is the reduction in security incidents?',
                            levels: ['Increased', 'No Change', 'Minimal', 'Moderate', 'Good', 'Significant']
                        },
                        {
                            id: 'q_3_2_beneficiary_2',
                            text: 'How effective is incident response team coordination?',
                            levels: ['Poor', 'Below Average', 'Average', 'Good', 'Excellent', 'Outstanding']
                        },
                        {
                            id: 'q_3_2_beneficiary_3',
                            text: 'What is the reduction in dwell time for threats?',
                            levels: ['Increased', 'No Change', '>30 days', '7-30 days', '1-7 days', '<1 day']
                        }
                    ]
                }
            ]
        }
    ]
};
