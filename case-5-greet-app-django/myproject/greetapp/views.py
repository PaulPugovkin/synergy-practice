from django.shortcuts import render, redirect
from .forms import NameForm
from .models import UserName

def index(request):
    if request.method == 'POST':
        form = NameForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            # Сохраним имя в базу данных
            UserName.objects.create(name=name)
            return redirect('greet', name=name)
    else:
        form = NameForm()
    return render(request, 'greetapp/index.html', {'form': form})

def greet(request, name):
    return render(request, 'greetapp/greet.html', {'name': name})
