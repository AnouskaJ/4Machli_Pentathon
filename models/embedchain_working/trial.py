import os
import json
os.environ["HUGGINGFACE_ACCESS_TOKEN"] = "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"

from embedchain import App
app = App.from_config("mistral.yaml")
app.add("https://medlineplus.gov/lab-tests/")


prompt = " Give me a list of 10 tests i should take. Just a numbered list, no text "
prompt_2 = "I have fever, cold, weakness and lack of taste from three days, what are the medical tests that you would suggest." + prompt
result = app.query(prompt_2)

print(result)

tests_suggested = [line.split(".")[1].strip() for line in result.split("\n") if line.strip()]

tests_dict = {"tests": [{"test_name": test} for test in tests_suggested]}

tests_json_str = json.dumps(tests_dict, indent=2)

print(tests_json_str)


with open(r'C:\Users\Dell\Downloads\ai4bharat\embedchain_working\lab_test.json', 'r') as file:
    lab_tests_data = json.load(file)

def get_test_details(test_name):
    for test in lab_tests_data['tests']:
        if test['test_name'] == test_name:
            return test
    return None

tests_json = json.loads(tests_json_str)

tests_details = [get_test_details(test['test_name']) for test in tests_json['tests'] if get_test_details(test['test_name']) is not None]

print("Test Details:")
print(json.dumps(tests_details, indent=2))

