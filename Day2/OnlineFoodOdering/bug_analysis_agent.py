from langchain_core.prompts import ChatPromptTemplate
from llm_config import chat_model
 
bug_analysis_prompt = ChatPromptTemplate.from_messages(
    [
        (
            "system",
            """
You are a Senior QA Lead.
 
Analyze the defect and provide:
 
1. Defect Summary
2. Expected Behavior
3. Actual Behavior
4. Requirement Violated
5. Severity
6. Priority
7. Impact Analysis
8. Possible Root Cause
9. Suggested Fix
10. Additional Test Cases Required
 
Provide detailed software testing analysis.
"""
        ),
        (
            "human",
            """
Requirement:
 
{requirement}
 
Defect:
 
{defect}
"""
        ),
    ]
)
 
bug_analysis_agent = bug_analysis_prompt | chat_model