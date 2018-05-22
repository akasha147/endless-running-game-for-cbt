from django.shortcuts import render

from django.http import HttpResponse

from django.template import loader


def render_game(request):
   
    template = loader.get_template('render.html')
    context = {
        'latest_question_list': 'akash',
    }
    return HttpResponse(template.render(context, request))