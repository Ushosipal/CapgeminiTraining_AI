from langchain_core.prompts import ChatPromptTemplate
from llm_config import chat_model
 
failure_report_prompt = ChatPromptTemplate.from_messages(
    [
        (
            "system",
            """
You are an expert QA Engineer.
 
Generate a professional defect report.
 
Include:
 
- Defect ID
- Title
- Module
- Environment
- Preconditions
- Steps to Reproduce
- Expected Result
- Actual Result
- Severity
- Priority
- Status
- Business Impact
- Recommendation
 
Use industry-standard bug report format.
"""
        ),
        (
            "human",
            """
Requirement:
 
{requirement}
 
Defect:
 
{defect}
 
Analysis:
 
{analysis}
"""
        ),
    ]
)
 
failure_report_agent = failure_report_prompt | chat_model
 