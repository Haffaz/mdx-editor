import { MarkdownEditor } from "../../components/MarkdownEditor";

const markdown = `
# 2024 W-2 Wage and Tax Statement
## Document Type: Copy C—For EMPLOYEE'S RECORDS

### Document Information
* OMB No. 1545-0008
* Department of the Treasury—Internal Revenue Service
* Notice: "This information is being furnished to the Internal Revenue Service. If you are required to file a tax return, a negligence penalty or other sanction may be imposed on you if this income is taxable and you fail to report it."

### Employee & Employer Information
* **Employee's SSN**: 123456789
* **Employer ID Number (EIN)**: 123456789
* **Employer Details**:
  - Tech Innovators Inc.
  - 123 Market Street, San Francisco, CA 94103

### Employee Details
- **Name**: Jane A. Doe
- **Address**: 456 Palm Avenue, San Francisco, CA 94115

### Wage and Tax Information
| Box | Description | Amount |
|-----|-------------|---------|
| 1 | Wages, tips, other compensation | 120000 |
| 2 | Federal income tax withheld | 18000 |
| 3 | Social security wages | 120000 |
| 4 | Social security tax withheld | 7440 |
| 5 | Medicare wages and tips | 120000 |
| 6 | Medicare tax withheld | 1740 |
| 7 | Social security tips | [Empty] |
| 8 | Allocated tips | [Empty] |
| 9 | [Empty] | [Empty] |
| 10 | Dependent care benefits | [Empty] |

### State Tax Information
- **State**: CA
- **Employer's state ID number**: 987654321
- **State wages, tips, etc.**: 120,000
- **State income tax**: 9,600
- **Local wages, tips, etc.**: [Empty]
- **Local income tax**: [Empty]
- **Locality name**: [Empty]

### Additional Information
- **Control number**: [Empty]
- **Nonqualified plans** (Box 11): [Empty]
- **Box 12**: [Empty for all subcategories a-d]
- **Box 13 Checkboxes**: [All unchecked]
  - Statutory employee
  - Retirement plan
  - Third-party sick pay
- **Box 14 Other**: [Empty]

*Note: Empty fields are indicated where no value was provided in the original document.*
`;

export default function MDXPage() {
	return <MarkdownEditor markdown={markdown} readOnly />;
}
