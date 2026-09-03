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
 
from requirement_agent import requirement_agent
from test_case_agent import test_case_agent
from bug_analysis_agent import bug_analysis_agent
from failure_report_agent import failure_report_agent
 
requirement = """
Online Food Ordering Application
 
A customer should be able to log in to a food delivery application,
search for a restaurant, add food items to the cart, apply a coupon,
select a delivery address, make payment, and place the order.
 
The application supports UPI, credit/debit cards,
and Cash on Delivery.
 
A coupon SAVE20 gives 20% off on orders above ₹500,
with a maximum discount of ₹150.
 
If payment fails, the order should not be created.
 
If payment succeeds, the customer should receive an order
confirmation with an order ID.
"""
 
print("=" * 80)
print("AGENT 1 - REQUIREMENT ANALYSIS")
print("=" * 80)
 
analysis = requirement_agent.invoke(
    {
        "requirement": requirement
    }
)
 
print(analysis.content)
 
print("=" * 80)
print("AGENT 2 - TEST CASE GENERATION")
print("=" * 80)
 
test_cases = test_case_agent.invoke(
    {
        "requirement": requirement,
        "analysis": analysis.content
    }
)
 
print(test_cases.content)
 
defect = """
A customer adds food worth ₹600 to the cart and applies SAVE20.
 
Expected:
20% discount = ₹120
 
Actual:
System applies ₹200 discount.
"""
 
print("=" * 80)
print("AGENT 3 - BUG ANALYSIS")
print("=" * 80)
 
bug_analysis = bug_analysis_agent.invoke(
    {
        "requirement": requirement,
        "defect": defect
    }
)
 
print(bug_analysis.content)
 
print("=" * 80)
print("AGENT 4 - FAILURE REPORT")
print("=" * 80)
 
failure_report = failure_report_agent.invoke(
    {
        "requirement": requirement,
        "defect": defect,
        "analysis": bug_analysis.content
    }
)
 
print(failure_report.content)

