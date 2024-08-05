from django import forms

class NameForm(forms.Form):
    name = forms.CharField(
        label='Your name',
        max_length=100,
        error_messages={
            'required': 'Please enter your name',
            'max_length': 'Name cannot exceed 100 characters'
        }
    )
