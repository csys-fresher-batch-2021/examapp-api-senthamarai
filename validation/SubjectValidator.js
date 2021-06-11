class SubjectValidator
{
    static validSubject(subject)
    {
        if (subject == null || subject == "") 
        {
            alert("Please Enter Subject");
            return false;
        }
        return true;
    }
}
module.exports= SubjectValidator;